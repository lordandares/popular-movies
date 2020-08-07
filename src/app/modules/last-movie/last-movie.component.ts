import { Component, OnInit } from '@angular/core';
import { ThemoviedbService } from 'src/app/services/themoviedb.service';

@Component({
  selector: 'app-last-movie',
  templateUrl: './last-movie.component.html',
  styleUrls: ['./last-movie.component.scss'],
})
export class LastMovieComponent implements OnInit {

  lastMovie =  {
    original_title: ''
  };

  constructor(private themoviedbService: ThemoviedbService) {
    this.themoviedbService.latestMovie().subscribe(data=>{
      this.lastMovie = data;
    })
  
  }

  ngOnInit() {}

}
