import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  no: number;
  email: string;
  alamat: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {no: 1, name: 'zaeni', email: 'zaeni@gmail.com', alamat: 'H'},
  {no: 2, name: 'dani', email:'dani@gamil.com' , alamat: 'He'},
  {no: 3, name: 'obet', email:'obet@gmai.com', alamat: 'Li'},
  {no: 4, name: 'frida', email:'frida@gmail.com', alamat: 'Be'},
 
];
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  displayedColumns: string[] = ['no', 'name', 'email', 'alamat'];
  dataSource = ELEMENT_DATA;
}

