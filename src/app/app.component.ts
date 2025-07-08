
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'The ChatMate App';
  users:any;

  constructor(private http: HttpClient,private accountService: AccountService) {}

  ngOnInit(){
    this.getUser();
    this.setCurrentUser();
  }
  setCurrentUser()
  {
    const user:User = JSON.parse(localStorage.getItem('user'));
    this.accountService.setCurrentUser(user);  
  }
  getUser()
  {
      this.http.get('http://localhost:36973/api/users').subscribe({
        next:(response)=>{
           this.users = response; 
        },
        error:(error)=>{
          console.log(error);
        }
      })
  }
} 
