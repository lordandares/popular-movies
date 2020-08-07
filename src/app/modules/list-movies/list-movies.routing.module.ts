import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMoviesComponent } from './list-movies.component';
import { DetailMovieComponent } from './detail-movie/detail-movie.component';

const routes: Routes = [
  {
    path: '',
    component: ListMoviesComponent,
  },
  {
    path: 'detail',
    component: DetailMovieComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListMoviesRoutingModule {}
