import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ContentComponentTodo } from '../content/content.component';
import {MatDialogModule} from '@angular/material/dialog'
import {MatInputModule} from '@angular/material/input'
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DialogComponent } from '../dialog/dialog.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    TodoListComponent,
    ContentComponentTodo,
    DialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    BrowserModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path:'',
        component: TodoListComponent
      }
    ])
  ]
})
export class TodoListModule { }
