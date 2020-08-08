import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {

  language = true;

  constructor(private translate: TranslateService, private router: Router) { }

  ngOnInit() {
    this.language = sessionStorage.getItem('lang') === 'es'? true : false;
  }

    //function to change language
    changeLang(){
      let lang = 'es';
      if(!this.language){
        lang = ('en');
      }
      this.translate.setDefaultLang(lang);
      this.translate.use(lang);
      sessionStorage.setItem('lang', 'es');
    }

    logout(){
      localStorage.setItem('session','false')
      this.router.navigate(['/login']);
    }

}
