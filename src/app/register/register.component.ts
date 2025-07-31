import { Component, Input, OnInit, Output } from '@angular/core';
import { User } from '../_models/user';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //  @Input() usersFromHomeComponent:any;
  //  @Output() cancelRegister = new EventEmitter();
  model : any = {};

  constructor() { }

  ngOnInit(): void {
  }

  // register()
  // {
  //   console.log(this.model);
  // }

  // cancel()
  // {
  //   //this.cancelRegister.emit(false);
  // }
}
