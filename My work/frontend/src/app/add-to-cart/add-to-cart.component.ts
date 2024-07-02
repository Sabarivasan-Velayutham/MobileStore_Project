// // import { Component, OnInit } from '@angular/core';
// // import { CartService } from '../cart.service';
// // import { PostService } from '../post.service';
// // import { Router } from '@angular/router';

// // import { Post } from '../post';
// // import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms'; 
// // import { UserService } from '../user.service';
// // import { User } from '../user';


// // @Component({
// //   selector: 'app-add-to-cart',
// //   templateUrl: './add-to-cart.component.html',
// //   styleUrls: ['./add-to-cart.component.css']
// // })
// // export class AddToCartComponent {
// //   form!: FormGroup;
// //   post!: Post;
// //   posts: Post[] = [];
// //   kasthuri!: User;
// //   Kasthuris: User[] = [];

// //   flag:boolean = false;
    
// //   /*------------------------------------------
// //   --------------------------------------------
// //   Created constructor
// //   --------------------------------------------
// //   --------------------------------------------*/
// //   constructor(
// //     public cartService: CartService,
// //     public postService: PostService,
// //     public userService: UserService,
// //     private router: Router,
// //     private formBuilder: FormBuilder
// //   ) { 
// //     this.form = this.formBuilder.group({
// //       itemId: [''] // Initialize with an empty value or your default value
// //     });
// //   }
// //   navigateToPayment(){
// //     this.router.navigate(['/payment']);
// //   }
    
// //   /**
// //    * Write code on Method
// //    *
// //    * @return response()
// //    */
// //   ngOnInit(): void {
// //     this.form = new FormGroup({
// //       userId: new FormControl('', [Validators.required]),
// //       itemId: new FormControl('', [Validators.required]),
// //       itemName: new FormControl('', [Validators.required]),
// //       itemStorage: new FormControl('', [Validators.required]),
// //       itemColour: new FormControl('', [Validators.required]),
// //       quantity: new FormControl('', [Validators.required]),
// //       userName: new FormControl('', [Validators.required]),
// //       mobileNumber: new FormControl('', [Validators.required]),
// //       address:new FormControl('', [Validators.required]),
// //       itemPrice:new FormControl('', [Validators.required]),
 
// //     });
// //     this.postService.getAll().subscribe((data: Post[])=>{
// //       this.posts = data;
// //       console.log(this.posts);
// //     })
// //     this.userService.getAll().subscribe((data: User[])=>{
// //       this.Kasthuris = data;
// //       console.log(this.Kasthuris);
// //     })
// //   }
    
// //   /**
// //    * Write code on Method
// //    *
// //    * @return response()
// //    */


// //   get f(){
// //     return this.form.controls;
// //   }
// //   onpaymentClick(){
// //     this.router.navigateByUrl('/payment');
// //   }
    
// //   /**
// //    * Write code on Method
// //    *
// //    * @return response()
// //    */

// //   submit(){
// //     console.log(this.form.value);
// //     this.posts.forEach(x => {
// //       if(x.itemId == this.form.value.itemId){
// //         this.flag = true;
// //         return;
// //       }
// //     });
  
   
   

// //     if(!this.flag){
// //       alert("Sorry, No mobiles exists with this id");
// //       this.form.reset();
// //     }

// //     this.postService.find(this.form.value.itemId).subscribe((data: Post)=>{
// //       console.log(data);
// //       this.post = data;
// //     });

// //     if(window.confirm("Confirmation!!You have to pay " +this.post.itemPrice)){
// //       this.cartService.create(this.form.value).subscribe((res:any) => {
// //         alert("Your booking has been successful.");
// //         console.log('Booking added successfully!');
// //         this.router.navigateByUrl('/customerDashboard');
// //       })
// //      }else{
// //       alert("You have not made the payment.");
// //      }
// //   }
// // }
// import { Component, OnInit } from '@angular/core';
// import { CartService } from '../cart.service';
// import { PostService } from '../post.service';
// import { ActivatedRoute, Router } from '@angular/router';
// import { Post } from '../post';
// import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
// import { UserService } from '../user.service';
// import { User } from '../user';

// @Component({
//   selector: 'app-add-to-cart',
//   templateUrl: './add-to-cart.component.html',
//   styleUrls: ['./add-to-cart.component.css'],
// })
// export class AddToCartComponent {
//   form!: FormGroup;
//   post!: Post;
//   posts: Post[] = [];
//   userId!: number;
//   user!: User;
//   id!:number;
//   kasthuri!: User;
//   Kasthuris: User[] = [];
//   flag: boolean = false;
//   total: number = 0; // Add a property for total
//   item: any;
//   userdata: any;
//   userdetail: any;

//   constructor(
//     public cartService: CartService,
//     public postService: PostService,
//     public userService: UserService,
//     private router: Router,
//     private formBuilder: FormBuilder,
//     private route: ActivatedRoute
//   ) {
//     this.form = this.formBuilder.group({
//       itemId: [''], // Initialize with an empty value or your default value
//       quantity: [1, Validators.required], // Add a quantity field with an initial value of 1
//     });
//   }

//   navigateToPayment() {
//     this.router.navigate(['/payment']);
//   }

//   ngOnInit(): void {
//     this.form = new FormGroup({
//       userId: new FormControl('', [Validators.required]),
//       itemId: new FormControl('', [Validators.required]),
//       itemName: new FormControl('', [Validators.required]),
//       itemStorage: new FormControl('', [Validators.required]),
//       itemColour: new FormControl('', [Validators.required]),
//       quantity: new FormControl('', [Validators.required]),
//       userName: new FormControl('', [Validators.required]),
//       mobileNumber: new FormControl('', [
//         Validators.required,
//         Validators.minLength(10),
//         Validators.maxLength(10),
//         Validators.pattern('^[0-9]*$'), // Only allow numbers
//       ]),
//       addressHouseNo: new FormControl('', [
//         Validators.required,
//         Validators.pattern('^[0-9]*$'), // Only allow numbers
//       ]),
//       addressStreet: new FormControl('', [
//         Validators.required,
//         Validators.pattern('^[a-zA-Z ]*$'), // Only allow letters and spaces
//       ]),
//       addressCity: new FormControl('', [
//         Validators.required,
//         Validators.pattern('^[a-zA-Z ]*$'), // Only allow letters and spaces
//       ]),
//       addressPincode: new FormControl('', [
//         Validators.required,
//         Validators.pattern('^[0-9]*$'), // Only allow numbers
//       ]),
//       itemPrice: new FormControl('', [Validators.required]),});
//     this.route.paramMap.subscribe((params) => {
//       const itemIdParam = params.get('itemId');
      
//       if (itemIdParam !== null) {
//         const itemId = Number(itemIdParam); // Convert the string to a number
//         if (!isNaN(itemId)) {
//           // Fetch item details using the postService
//           this.postService.find(itemId).subscribe((data: Post) => {
//             this.post = data;
//             this.item.itemId = data.itemId; // Assign item details here
//             this.item.itemName = data.itemName;
//           });
//         } else {
//           // Handle the case where itemIdParam is not a valid number
//           console.error('Invalid itemId:', itemIdParam);
//         }
//       } else {
//         // Handle the case where itemIdParam is null
//         console.error('itemId is null');
//       }
//     });
//     this.route.paramMap.subscribe((params) => {
//       const itemId = params.get('itemId');

//       // Fetch item details using the postService
    
//   });



//     this.userdata = localStorage.getItem('data');
//     console.log("kjklkj",this.userdata)

//     this.postService.getAll().subscribe((data: Post[]) => {
//       this.posts = data;
//       console.log("jjkl",this.posts);
//       this.userdetail=JSON.parse(this.userdata);
//       console.log("local",this.userdetail);
      
//     });
    

//     this.userService.getAll().subscribe((data: User[]) => {
//       this.Kasthuris = data;
//       console.log(this.Kasthuris);
//     });
//   }

//   get f() {
//     return this.form.controls;
//   }

//   onpaymentClick() {
//     this.router.navigateByUrl('/payment');
//   }

//   // submit() {
//   //   console.log(this.form.value);
//   //   this.posts.forEach((x) => {
//   //     if (x.itemId == this.form.value.itemId) {
//   //       this.flag = true;
//   //       return;
//   //     }
//   //   });

//   //   if (!this.flag) {
//   //     alert('Sorry, No mobiles exist with this id');
//   //     this.form.reset();
//   //   }
    

//   //   this.postService.find(this.form.value.itemId).subscribe((data: Post) => {
//   //     console.log(data);
//   //     this.post = data;
//   //   });
//   //   // Convert itemPrice to a number
//   //   const itemPriceAsNumber: number = parseFloat(this.post.itemPrice);

//   //   // Calculate the total based on the quantity
//   //   this.total = this.form.value.quantity * itemPriceAsNumber;

//   //   // Calculate the total based on the quantity
//   //   //this.total = this.form.value.quantity * this.post.itemPrice;

//   //   if (window.confirm('Confirmation!! You have to pay ' + this.total)) {
//   //     this.cartService.create(this.form.value).subscribe((res: any) => {
//   //       alert('Your booking has been successful.');
//   //       console.log('Booking added successfully!');
//   //       this.router.navigateByUrl('/customerDashboard');
//   //     });
//   //   } else {
//   //     alert('You have not made the payment.');
//   //   }
//   // }
//   submit() {
//     console.log(this.form.value);
//     this.posts.forEach((x) => {
//       if (x.itemId == this.form.value.itemId) {
//         this.flag = true;
//         return;
//       }
//     });
  
//     if (!this.flag) {
//       alert('Sorry, No mobiles exist with this id');
//       this.form.reset();
//     }
    
//     this.postService.find(this.form.value.itemId).subscribe((data: Post) => {
//       console.log(data);
//       this.post = data;
//     });
  
//     // Calculate the total based on the quantity and itemPrice
//     const itemPriceAsNumber: number = parseFloat(this.post.itemPrice);
//     this.total = this.form.value.quantity * itemPriceAsNumber;
  
//      if (window.confirm('Confirmation!! You have to pay ' + this.total)) {
//       this.router.navigateByUrl('/payment');
//     //   // Send the form.value object directly to the create method
//       //this.cartService.create(this.form.value).subscribe((res: any) => {
//          //alert('Your booking has been successful.');
//          //console.log('Booking added successfully!');
//          //this.router.navigateByUrl('/customerDashboard');});
//      } else {
//       alert('You have not made the payment.');
//      }
//   }
  
// }

import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../post';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css'],
})
export class AddToCartComponent implements OnInit{
  selectedMobile: any = {};
  form!: FormGroup;
  post!: Post;
  posts: Post[] = [];
  userId!: number;
  user!: User;
  id!:number;
  kasthuri!: User;
  Kasthuris: User[] = [];
  flag: boolean = false;
  total: number = 0; // Add a property for total
  item: any;
  userdata: any;
  userdetail: any;
selectedItem: any;
  


  constructor(
    public cartService: CartService,
    public postService: PostService,
    public userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      itemId: [''], // Initialize with an empty value or your default value
      quantity: [1, Validators.required], // Add a quantity field with an initial value of 1
    });
    this.item = {}; 
  }

  navigateToPayment() {
    this.router.navigate(['/payment']);
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      userId: new FormControl('', [Validators.required]),
      itemId: new FormControl('', [Validators.required]),
      itemName: new FormControl('', [Validators.required]),
      itemStorage: new FormControl('', [Validators.required]),
      itemColour: new FormControl('', [Validators.required]),
      quantity: new FormControl(1, [Validators.required]),
      userName: new FormControl('', [Validators.required]),
      mobileNumber: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      itemPrice: new FormControl('', [Validators.required]),
    });
  
    this.route.paramMap.subscribe((params) => {
      const itemIdParam = params.get('itemId');
      console.log(itemIdParam, "ItemId")
  
      if (itemIdParam !== null) {
        const itemId = Number(itemIdParam); // Convert the string to a number
        if (!isNaN(itemId)) {
          // Fetch item details using the postService
          this.postService.find(itemId).subscribe((data: Post) => {
            this.post = data;
            this.item.itemId = data.itemId; // Assign item details here
  
            // Set the value of the itemId form control
            // Set the value of the itemId form control
            this.form.controls['itemId'].setValue(data.itemId);
  
            // You can also set other form control values here if needed
            // You can also set other form control values here if needed
            this.form.controls['itemName'].setValue(data.itemName);
            this.form.controls['itemStorage'].setValue(data.itemStorage);
            this.form.controls['itemColour'].setValue(data.itemColour);
            // this.form.controls['itemQuantity'].setValue(data.itemQuantity);
           
              // this.user = userData;
              const userDataString = localStorage.getItem('data');

              if (userDataString !== null) {
                this.userdata = JSON.parse(userDataString);
                console.log("UserData", this.userdata);
              
                // Update the user-related form fields
                this.form.controls['userId'].setValue(this.userdata.userId);
                this.form.controls['userName'].setValue(this.userdata.userName);
                this.form.controls['mobileNumber'].setValue(this.userdata.mobileNumber);
                this.form.controls['address'].setValue(this.userdata.address);
              } else {
                console.error('User data is null');
                // Handle the case where 'data' is not found in localStorage or is null
              }
  
          });
        } else {
          // Handle the case where itemIdParam is not a valid number
          console.error('Invalid itemId:', itemIdParam);
        }
      } else {
        // Handle the case where itemIdParam is null
        console.error('itemId is null');
      }
    });
    this.userdata = localStorage.getItem('data');
    console.log("kjklkj",this.userdata)

    this.postService.getAll().subscribe((data: Post[]) => {
      this.posts = data;
      console.log("jjkl",this.posts);
      this.userdetail=JSON.parse(this.userdata);
      console.log("local",this.userdetail);
    });
   
    this.route.paramMap.subscribe((params) => {
      const itemId = params.get('itemId');

      // Fetch item details using the postService
    
  });


    this.userService.getAll().subscribe((data: User[]) => {
      this.Kasthuris = data;
      console.log(this.Kasthuris);
    });
  }

  get f() {
    return this.form.controls;
  }

  onpaymentClick() {
    this.router.navigateByUrl('/payment');
  }

 
  submit() {
    console.log(this.form.value);
    this.posts.forEach((x) => {
      if (x.itemId == this.form.value.itemId) {
        this.flag = true;
        return;
      }
    });
  
    if (!this.flag) {
      alert('Sorry, No mobiles exist with this id');
      this.form.reset();
    }
    
    this.postService.find(this.form.value.itemId).subscribe((data: Post) => {
      console.log(data);
      this.post = data;
    });
  
    // Calculate the total based on the quantity and itemPrice
    const itemPriceAsNumber: number = parseFloat(this.post.itemPrice);
    this.total = this.form.value.quantity * itemPriceAsNumber;
  
     if (window.confirm('Confirmation!! You have to pay ' + this.total)) {
      this.cartService.create(this.form.value).subscribe((res: any) => {
          alert('Your booking has been successful.');
          console.log('Booking added successfully!');
          this.router.navigateByUrl('/customerDashboard');});
      this.router.navigateByUrl('/payment');
    
     } else {
      alert('You have not made the payment.');
     }
  }
  
}