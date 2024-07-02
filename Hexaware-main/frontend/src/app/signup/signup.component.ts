import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form!: FormGroup;
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public userService: UserService,
    private router: Router
  ) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.form = new FormGroup({
      userName: new FormControl('', [Validators.required,Validators.minLength(4),Validators.maxLength(20)]),
      emailId: new FormControl('', Validators.required),
      mobileNumber: new FormControl('', Validators.required),
      createPassword: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
      usertype: new FormControl('', Validators.required)
    });
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  get f(){
    return this.form.controls;
  }
    
  /**
   * Write code on Method
   *
   * @return response() 
   */
  submit(){
    console.log(this.form.value);
    if(this.form.value.createPassword != this.form.value.confirmPassword){
      alert("Password and Confirm Password must be same!");
    }
    this.userService.create(this.form.value).subscribe((res:any) => {
         console.log('Account signed successfully!');
         alert('Sign-up successful');
         this.router.navigateByUrl('login');
    })
  }
}