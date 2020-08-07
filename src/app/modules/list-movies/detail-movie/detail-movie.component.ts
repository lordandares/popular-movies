import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThemoviedbService } from '../../../services/themoviedb.service';


@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss'],
})
export class DetailMovieComponent implements OnInit {

  id:string;
  detail: any;

  constructor(private route: ActivatedRoute, private themoviedbService: ThemoviedbService) {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.themoviedbService.detailMovie(this.id).subscribe(data=>{
        this.detail = data;
        console.log(this.detail);
      })
    });
    
   }

  ngOnInit() {

  }

}
