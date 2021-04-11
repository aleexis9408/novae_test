import { Component } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { requestGetAccount, responseGetAccount, AccountResult } from '../../interfaces/novae.interfaces';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  account: AccountResult;

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    let request: requestGetAccount = {
      "channelId": "7",
      "language": "en",
      "email": "cvp2006@gmail.com",
      "security": {
        "ip": "12.12.12.12",
        "host": "Localhost",
        "cookie": "cookie",
        "userAgent": "userAgent",
        "deviceFingerPrint": "deviceFingerPrint"
      }
    };
    this.accountService.getAccount(request).subscribe(data => {
      this.account = data.accountResultDto;
    })
  }


}
