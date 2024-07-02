import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

import { User } from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User[] = [];
  constructor(private userService: UserService) { }
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.userService.getAll().subscribe((user: User[])=>{
      this.user = user;
      console.log(this.user);
    })  
  }

  deletePost(id:number){
    this.userService.delete(id).subscribe(res => {
         this.user = this.user.filter(user=> user.userId !== id);
         console.log('User deleted successfully!');
         alert('User deleted successfully');
    })
}
}

  