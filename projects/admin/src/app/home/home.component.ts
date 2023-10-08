import { Component, EventEmitter, Output } from '@angular/core';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public isOpen = false;

  public  drawerToggle(){
   this.isOpen = !this.isOpen;
  }

  // @Output() toggelSidebar = new EventEmitter<void>(); 

  // public sideToggle(){
  //   this.toggelSidebar.emit();
  // };
}
