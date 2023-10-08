import { Component, Inject, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
// import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
   item!: FormGroup; 

  constructor( private fromBuilder: FormBuilder, )
    {}

  ngOnInit(): void {
   this.item = this.fromBuilder.group({
    nama:'',
    email:'',
    alamat:'',
   })
  }

  public save(){
    // if(this.item){
    //   this.api.postItem(this.item.value)
    //   .subscribe({
    //     next:(res)=>{
    //       alert("suskset menambah data")
    //     },
    //     error:()=>{
    //       alert("gagal menyimpan")
    //     }
    //   })
    // }
  }
}
