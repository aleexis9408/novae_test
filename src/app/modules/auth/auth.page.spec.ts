import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { of, throwError } from 'rxjs';
import { AuthPage } from './auth.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

describe('AuthPage', () => {
  let component: AuthPage;
  let fixture: ComponentFixture<AuthPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AuthPage],
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule
      ],
      providers: [FormBuilder]
    }).compileComponents();

    fixture = TestBed.createComponent(AuthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when login is called', () => {
    beforeEach(() => {
      spyOn(component['authService'], 'login').and.returnValue(of(
        {
          "operationResult": {
            "code": "200",
            "message": "Ok"
          }
        }
      ))
      spyOn(component['router'], 'navigate');
      component.login();
    });
    it('should navigate to home page', () => {
      expect(component['router'].navigate).toHaveBeenCalledWith(['home']);
    });
  });

  describe('when login is called and return error', () => {
    beforeEach(() => {
      spyOn(component['authService'], 'login').and.returnValue(throwError(
        'Correo Electrónico no es válido.'
      ));
      spyOn(component, 'presentToast');
      component.login();
    });
    it('should navigate to home page', () => {
      expect(component.presentToast).toHaveBeenCalled();
    });
  });

  describe('when presentToast is called', () => {
    beforeEach(() => {
      spyOn(component['toastController'], 'create');
      component.presentToast('Correo Electrónico no es válido.');
    });
    it('should navigate to home page', () => {
      expect(component['toastController'].create).toHaveBeenCalled();
    });
  });

});
