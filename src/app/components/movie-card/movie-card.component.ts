import { Component, OnInit, Input } from '@angular/core';
import { URL_IMG_DETAIL } from '../../common/constants'

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {

  @Input() card;

  poster: string;

  constructor() { }

  ngOnInit() {
    console.log(this.card)
    this.poster = this.card.poster_path? URL_IMG_DETAIL + this.card.poster_path: 'https://cdn4.iconfinder.com/data/icons/movie-basics/48/v-47-512.png' ;
  }

}
