import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AuthGuard } from '../../auth/auth.guard';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'list',
        canActivate: [ AuthGuard ],
        loadChildren: () => import('../list-movies/list-movies.module').then(m => m.ListMoviesModule)
      },
      {
        path: 'last',
        canActivate: [ AuthGuard ],
        loadChildren: () => import('../last-movie/last-movie.module').then(m => m.LastMovieModule)
      },
      {
        path: '',
        canActivate: [ AuthGuard ],
        redirectTo: '/tabs/list',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
