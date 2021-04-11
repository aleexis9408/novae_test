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
    const security = JSON.parse(sessionStorage.getItem('security'));
    const email = sessionStorage.getItem('email');
    let request: requestGetAccount = {
      channelId: "7", language: "es",
      email, security
    };

    this.accountService.getAccount(request).subscribe(data => {
      this.account = data.accountResultDto;
    })
  }


}
