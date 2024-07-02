import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {User} from '../user';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {
  id!: number;
  users: User[] = [];

  constructor(public userService: UserService) { }
    ngOnInit(): void {

  this.userService.getAll().subscribe((data: User[])=>{
    this.users = data;
    console.log(this.users);
  
  })
    }
  
  }  

  
