import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from 'src/app/explore-container/explore-container.module';
import { LastMovieRoutingModule } from './last-movie.routing.module';
import { LastMovieComponent } from './last-movie.component';
import { MovieCardComponent } from 'src/app/components/movie-card/movie-card.component';



@NgModule({
  declarations: [ LastMovieComponent, MovieCardComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    LastMovieRoutingModule
  ]
})
export class LastMovieModule { }
