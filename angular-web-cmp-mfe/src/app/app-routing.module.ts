import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mfe/a-route',
    pathMatch: 'full'
  },
  {
    path: 'mfe/a-route',
    loadComponent: () => import('./components/a-route/a-route.component').then(m => m.ARouteComponent)
  },
  {
    path: 'mfe/b-route',
    loadComponent: () => import('./components/b-route/b-route.component').then(m => m.BRouteComponent)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
      useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
