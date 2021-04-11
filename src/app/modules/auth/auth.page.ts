import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../../services/auth.service';
import { requestLogin } from '../../interfaces/novae.interfaces';
import { ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  formLogin: FormGroup = this.fb.group({
    username: ['cvp2006@gmail.com', [Validators.required, Validators.email]],
    password: ['Novae2020*', Validators.required],
    language: ['es', Validators.required],
    channelId: ['1', Validators.required],
    security: this.fb.group({
      ip: ["12.12.12.12"],
      host: ["Localhost"],
      cookie: ["cookie"],
      userAgent: ["userAgent"],
      deviceFingerPrint: ["deviceFingerPrint"]
    })
  });;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastController: ToastController,
    private fb: FormBuilder
  ) { }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color: 'warning'
    });
    toast.present();
  }

  login() {
    let login: requestLogin = this.formLogin.value;
    this.authService.login(login).subscribe(
      data => this.router.navigate(['home']),
      error => {
        this.presentToast(error);
      }
    )
  }

  ngOnInit() {
    const token: string = sessionStorage.getItem('token');
    if (token) {
      this.router.navigate(['home']);
    }
  }

}
