// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-payment',
//   templateUrl: './payment.component.html',
//   styleUrls: ['./payment.component.css']
// })
// export class PaymentComponent {
//   form: FormGroup;

//   constructor(
//     private fb: FormBuilder,
//     private router: Router) 
//     {
//     this.form = this.fb.group({
//       cardNumber: ['', [Validators.required, Validators.pattern('[0-9]{12}')]],
//       cardName: ['', [Validators.required]],
//       expiryDate: ['', [Validators.required, this.validateExpiryDate]],
//       cvv: ['', [Validators.required, Validators.pattern('[0-9]{3}')]]
//     });
//   }
//   navigatetocardpayment(){
//     this.router.navigate(['/cardpayment']);
//   }
//   navigatetocashondelivery(){
//     this.router.navigate(['/cashondelivery']);
//   }
//   navigatetoOrderPlaced(){
//     this.router.navigate(['/orderplaced']);
//   }
  
  

//   onSubmit() {
//     if (this.form.valid) {
//       // Handle form submission here, e.g., send data to a server.
//       console.log('Form submitted with data:', this.form.value);
//       // You can implement payment processing logic here.
//     }
//   }

//   validateExpiryDate(control: any) {
//     const value = control.value;
//     if (!/^(0[1-9]|1[0-2])\/20\d{2}$/.test(value)) {
//       return { invalidExpiryDate: true };
//     }
//     const today = new Date();
//     const [month, year] = value.split('/').map(Number);
//     if (year < today.getFullYear() || (year === today.getFullYear() && month < today.getMonth() + 1)) {
//       return { expiredExpiryDate: true };
//     }
//     return null;
//   }
// }
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router) 
    {
    this.form = this.fb.group({
      cardNumber: ['', [Validators.required, Validators.pattern('[0-9]{16}')]],
      cardName: ['', [Validators.required]],
      expiryDate: ['', [Validators.required, this.validateExpiryDate]],
      cvv: ['', [Validators.required, Validators.pattern('[0-9]{3}')]]
    });
  }
  
  navigatetocardpayment(){
    this.router.navigate(['/cardpayment']);
  }
  
  navigatetocashondelivery(){
    this.router.navigate(['/cashondelivery']);
  }
  
  navigatetoOrderPlaced(){
    this.router.navigate(['/orderplaced']);
  }

  onProceedToPaymentClick() {
    // if (this.form.valid) {
    //   // Handle form submission here, e.g., send data to a server.
    //   console.log('Form submitted with data:', this.form.value);
    //   // You can implement payment processing logic here.
    // } else {
    //   alert('Please fill in all the required fields correctly before proceeding.');
    // }
    if (window.confirm('Processing.....')) {
      this.router.navigateByUrl('/orderplaced');
    //   // Send the form.value object directly to the create method
      //this.cartService.create(this.form.value).subscribe((res: any) => {
         //alert('Your booking has been successful.');
         //console.log('Booking added successfully!');
         //this.router.navigateByUrl('/customerDashboard');
       //});
     } else {
      alert('You have not made the payment.');
     }
  }

  validateExpiryDate(control: any) {
    const value = control.value;
    if (!/^(0[1-9]|1[0-2])\/20\d{2}$/.test(value)) {
      return { invalidExpiryDate: true };
    }
    const today = new Date();
    const [month, year] = value.split('/').map(Number);
    if (year < today.getFullYear() || (year === today.getFullYear() && month < today.getMonth() + 1)) {
      return { expiredExpiryDate: true };
    }
    return null;
  }
}
