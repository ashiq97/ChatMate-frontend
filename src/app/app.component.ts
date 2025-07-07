
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { error } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'The ChatMate App';
  users:any;

  constructor(private http: HttpClient) {}

  ngOnInit(){
    this.getUser();
  }

  getUser()
  {
    this.http.get('http://localhost:36973/api/users').subscribe(response => {
        this.users = response; 
        },error => {
          console.log(error);
        })
  }
} 
