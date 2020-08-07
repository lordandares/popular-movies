import { Component, OnInit } from '@angular/core';
import { ThemoviedbService } from 'src/app/services/themoviedb.service';
import { INITIAL_PAGES_NUMBER } from 'src/app/common/constants';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss'],
})
export class ListMoviesComponent implements OnInit {

  listMovies= {
    results: []
  };
  pages = INITIAL_PAGES_NUMBER;

  constructor(private themoviedbService: ThemoviedbService) {
    this.themoviedbService.listMovies(this.pages).subscribe(data=>{
      this.listMovies = data;
      console.log(this.listMovies);
    })
  
  }

  ngOnInit() {

  }

}
