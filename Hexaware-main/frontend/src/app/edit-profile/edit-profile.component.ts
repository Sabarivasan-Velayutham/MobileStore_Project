import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router} from '@angular/router';
import { User } from '../user';
import { FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  userId!: number;
  user! : User;
  id!:number;
  form!: FormGroup;

  submitted = false;
 
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
   ) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];
        console.log(this.userId);
    this.userService.find(this.userId).subscribe((data: User)=>{
      console.log(data);
      this.user = data;
    });

    this.form = new FormGroup({
      userId: new FormControl('', [Validators.required]),
      userName: new FormControl('', [Validators.required]),
      emailId: new FormControl('', Validators.required),
      mobileNumber: new FormControl('', Validators.required),
      createPassword: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
      usertype: new FormControl('', Validators.required)
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.userService.update(this.userId, this.form.value).subscribe((res:any) => {
      this.submitted = true;
         console.log('User updated successfully!');
         alert('User updated successfully!');
         this.router.navigateByUrl('/customerDashboard');
    })
  }
}
