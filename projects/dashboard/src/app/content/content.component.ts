import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { IEmployee } from '../dialog/dialog.model';


@Component({
  selector: 'app-contentTodo',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponentTodo {


  // public data :IUser[] =[];
  
  

  constructor( public dialog :MatDialog){
  }
  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%'
    });
  }
  

  
}
