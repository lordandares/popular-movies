import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL, LATEST_MOVIE, LIST_MOVIES, DETAIL_MOVIE } from '../common/constants'

@Injectable({
  providedIn: 'root'
})
export class ThemoviedbService {


  constructor(private http: HttpClient) { }

  
  // this method returns lastMovie in form of Observable
  latestMovie(lang): Observable<any> {
    return this.http.get(API_URL + LATEST_MOVIE  + '?language=' + lang);
  }

  // this method returns lastMovie in form of Observable
  listMovies(pages, lang): Observable<any> {
    return this.http.get(API_URL + LIST_MOVIES + pages + '&language=' + lang);
  }

    // this method returns lastMovie in form of Observable
  detailMovie(id, lang): Observable<any> {
    return this.http.get(API_URL + DETAIL_MOVIE + id  + '&language=' + lang);
  }
}
