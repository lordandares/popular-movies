import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LastMovieComponent } from './last-movie.component';
import { AuthGuard } from 'src/app/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [ AuthGuard ],
    component: LastMovieComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LastMovieRoutingModule {}
