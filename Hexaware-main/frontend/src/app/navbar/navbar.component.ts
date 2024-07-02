import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  IsLoggedIn:boolean=false
  IsAdmin:boolean=false
  IsCustomer:boolean=false
  users: User[] = [];
  userId!:number;
  
  constructor(public userService: UserService) { }

  ngOnInit(): void {

    
    this.IsLoggedIn=localStorage.getItem("User")!=null ;
    var x = localStorage.getItem("User");
   if(x){
    this.IsAdmin=JSON.parse(x).value.username=='Admin';
    // this.id=JSON.parse(x).userId;
    // console.log(this.id)
    this.IsCustomer = JSON.parse(x).value.username=='Customer';
    this.userId = JSON.parse(x).value.userId;
    console.log(this.userId);
    
    

 }
//  this.load();
this.userService.getAll().subscribe((data: User[])=>{
  this.users = data;
  console.log(this.users);

})
  }
 Logout(){

   localStorage.removeItem("User");
   location.href = "";
   
 }


}
