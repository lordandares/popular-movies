import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  language = true;
  login= {
    username : '',
    password : ''
  }
  submitted = false;

  constructor(private router: Router, private translate: TranslateService) { }

  ngOnInit() {}

  loginUser() {
    localStorage.setItem('session','true')
    this.router.navigate(['']);
  }

  changeLang(){
    let lang = 'es';
    if(!this.language){
      lang = ('en');
    }
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    sessionStorage.setItem('lang', 'es');
  }

}
