import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LastMovieComponent } from './last-movie.component';

const routes: Routes = [
  {
    path: '',
    component: LastMovieComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LastMovieRoutingModule {}
