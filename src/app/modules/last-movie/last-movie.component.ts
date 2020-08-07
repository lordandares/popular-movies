import { Component, OnInit } from '@angular/core';
import { ThemoviedbService } from 'src/app/services/themoviedb.service';
import { of } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-last-movie',
  templateUrl: './last-movie.component.html',
  styleUrls: ['./last-movie.component.scss'],
})
export class LastMovieComponent implements OnInit {

  lastMovie =  {
    original_title: ''
  };
  language = true;

  constructor(private themoviedbService: ThemoviedbService, private translate: TranslateService) {
    this.themoviedbService.latestMovie(sessionStorage.getItem('lang')).subscribe(data=>{
      this.lastMovie = data;
    })
  
  }

  ngOnInit() {
    this.language = sessionStorage.getItem('lang') === 'es'? true : false;
  }

  //function to change language
  changeLang(){
    let lang = 'es';
    console.log(this.lastMovie)
    if(!this.language){
      lang = ('en');
    }
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    sessionStorage.setItem('lang', 'es');
  }

}
