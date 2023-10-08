import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const DASHBOARD_APP_URL = 'http://localhost:4300/remoteEntry.js';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'todo-list',
    loadChildren: () => {
      return loadRemoteModule({
        remoteEntry: DASHBOARD_APP_URL,
        remoteName: 'dashboard',
        exposedModule: './TodoListModule',
      })
        .then(m => m.TodoListModule)
        .catch(err => console.log(err));
    }
  // },
  // { path: 'todo/list', loadChildren: () => import('./todo/todo.component').then(m => m.TodoComponent) 
}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routeCompArr = [HomeComponent];
