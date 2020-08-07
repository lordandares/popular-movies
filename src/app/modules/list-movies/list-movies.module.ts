import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from 'src/app/explore-container/explore-container.module';
import { ListMoviesRoutingModule } from './list-movies.routing.module';
import { ListMoviesComponent } from './list-movies.component';
import { MovieCardComponent } from 'src/app/components/movie-card/movie-card.component';
import { DetailMovieComponent } from './detail-movie/detail-movie.component';
import { MovieDetailComponent } from 'src/app/components/movie-detail/movie-detail.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { createTranslateLoader } from 'src/app/app.module';
import { HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [ ListMoviesComponent, MovieCardComponent, DetailMovieComponent , MovieDetailComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ListMoviesRoutingModule,
    TranslateModule,
    TranslateModule.forChild({
      loader:{
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      },
    })
  ]
})
export class ListMoviesModule { }
