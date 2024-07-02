import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, FormBuilder} from '@angular/forms';

function mobileNumberValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const mobileNumber = control.value;
    const isValid = /^[0-9]{10}$/.test(mobileNumber);
    return isValid ? null : { invalidMobileNumber: true };
  };
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  form!: FormGroup;
  isInvalidCredentials: any;

  constructor(
    public userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.form = new FormGroup({
      userId: new FormControl('', [Validators.required,Validators.minLength(2),Validators.maxLength(5)]),
      userName: new FormControl('', [Validators.required,Validators.minLength(4),Validators.maxLength(20)]),
      // emailId: new FormControl('', Validators.required),
      emailId: new FormControl('', [Validators.required, Validators.email]),
      mobileNumber: new FormControl('', [Validators.required, mobileNumberValidator()]),
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
    
    if (this.form.invalid) {
      //alert("Invalid credentials! Please check the form for errors.");
      console.log('form is invalid');
      this.isInvalidCredentials = true;
      return; // Don't proceed with submission if the form is invalid
    }

    if(this.form.value.createPassword != this.form.value.confirmPassword){
      alert("Password and Confirm Password must be same!");
      return;
    }
    
    // this.userService.create(this.form.value).subscribe(
    //   (res: any) => {
    //     console.log('Account signed successfully!');
    //     alert('Sign-up successful');
    //     this.router.navigateByUrl('/login');
    //   },
    //   (error) => {
    //     console.error('Error signing up:', error);
    //     alert('invalid crenditials');
    //     this.isInvalidCredentials = true; // Set the error flag to display the message
    //   }
    // );
    this.userService.create(this.form.value).subscribe(
      (res: any) => {
        console.log('Account signed successfully!');
        alert('Sign-up successful');
        this.router.navigateByUrl('/login');
      },
      (error) => {
        console.error('Error signing up:', error);
        if (error.status === 409) {
          alert('Email already exists');
        } else {
          alert('Invalid credentials');
        }
        this.isInvalidCredentials = true;
      }
    );
  }
}
    
  // }
  // submit() {
  //   console.log(this.form.value);
  
  //   if (this.form.invalid) {
  //     console.log('form is invalid');
  //     return; // Don't proceed with submission if the form is invalid
  //   }
  
  //   if (this.form.value.createPassword != this.form.value.confirmPassword) {
  //     alert("Password and Confirm Password must be the same!");
  //     return;
  //   }
  
  //   this.userService.create(this.form.value).subscribe(
  //     (res: any) => {
  //       console.log('Account signed up successfully!');
  //       alert('Sign-up successful');
  //       this.router.navigateByUrl('/login');
  //     },
  //     (error) => {
  //       console.error('Error signing up:', error);
  //       alert('Invalid credentials'); // Show the error message only on server error
  //     }
  //   );
  // }
  
