import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { requestGetAccount, responseGetAccount } from '../interfaces/novae.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private basePath = '/v1/getAccount2';

  constructor(private http: HttpClient) { }

  getAccount(account: requestGetAccount): Observable<responseGetAccount> {
    return this.http.post<responseGetAccount>(this.basePath, account);
  }
}
