import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authentification/service/auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
{ path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) }, 
{ path: 'authentification', loadChildren: () => import('./authentification/authentification.module').then(m => m.AuthentificationModule) },
{ path: 'home', canActivate:[AuthGuard], loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
