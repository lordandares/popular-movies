import { Component, OnInit, Input } from '@angular/core';
import { URL_IMG } from 'src/app/common/constants';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {


  @Input() card;

  poster: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.card)


    this.poster = this.card.poster_path? URL_IMG + this.card.poster_path: 'https://cdn4.iconfinder.com/data/icons/movie-basics/48/v-47-512.png' ;
  }

}
