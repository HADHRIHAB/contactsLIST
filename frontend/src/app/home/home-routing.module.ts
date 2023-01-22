import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { ListComponent } from './components/list/list.component';
import { UpdateComponent } from './components/update/update.component';
import { HomeComponent } from './home.component';

const routes: Routes = [{ path: '', component: HomeComponent },
{ path: 'ajouts', component: AddComponent },
{ path: 'contacts', component: ListComponent },
{ path: 'update/:id', component: UpdateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
