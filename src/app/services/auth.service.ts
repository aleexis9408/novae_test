import { Injectable } from '@angular/core';
import { Observable, throwError } from "rxjs";
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";
import { requestLogin, responseLogin } from '../interfaces/novae.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private basePath = '/v1/login';
  public isLogin = false;
  constructor(private http: HttpClient) { }

  login(loginObj: requestLogin): Observable<responseLogin> {
    return this.http.post<responseLogin>(this.basePath, loginObj).pipe(
      map((response: responseLogin) => {
        const { code, message } = response.operationResult;
        if (code !== "200") {
          throw new Error(message);
        }
        this.isLogin = true;
        sessionStorage.setItem('token', response.authenticationToken);
        sessionStorage.setItem('email', loginObj.username);
        sessionStorage.setItem('security', JSON.stringify(loginObj.security));
        sessionStorage.setItem('login', JSON.stringify(response));
        return response;
      }),

      catchError((err) => { this.isLogin = false; return throwError(err); })
    );
  }


}
