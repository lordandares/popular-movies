import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMoviesComponent } from './list-movies.component';
import { DetailMovieComponent } from './detail-movie/detail-movie.component';
import { AuthGuard } from 'src/app/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [ AuthGuard ],
    component: ListMoviesComponent,
  },
  {
    path: 'detail',
    canActivate: [ AuthGuard ],
    component: DetailMovieComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListMoviesRoutingModule {}
