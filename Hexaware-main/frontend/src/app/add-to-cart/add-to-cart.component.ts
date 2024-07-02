import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

import { Post } from '../post';
import { FormGroup, FormControl, Validators} from '@angular/forms'; 


@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent {
  form!: FormGroup;
  post!: Post;
  posts: Post[] = [];

  flag:boolean = false;
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public cartService: CartService,
    public postService: PostService,
    private router: Router
  ) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.form = new FormGroup({
      userId: new FormControl('', [Validators.required]),
      itemId: new FormControl('', [Validators.required]),
      itemName: new FormControl('', [Validators.required]),
      itemStorage: new FormControl('', [Validators.required]),
      itemColour: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required]),
      userName: new FormControl('', [Validators.required]),
      mobileNumber: new FormControl('', [Validators.required]),
      address:new FormControl('', [Validators.required]),
      itemPrice:new FormControl('', [Validators.required]),
 
    });
    this.postService.getAll().subscribe((data: Post[])=>{
      this.posts = data;
      console.log(this.posts);
    })
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
    this.posts.forEach(x => {
      if(x.itemId == this.form.value.itemId){
        this.flag = true;
        return;
      }
    });
  
   
   

    if(!this.flag){
      alert("Sorry, No mobiles exists with this id");
      this.form.reset();
    }

    this.postService.find(this.form.value.itemId).subscribe((data: Post)=>{
      console.log(data);
      this.post = data;
    });

    if(window.confirm("Confirmation!!You have to pay " +this.post.itemPrice)){
      this.cartService.create(this.form.value).subscribe((res:any) => {
        alert("Your booking has been successful.");
        console.log('Booking added successfully!');
        this.router.navigateByUrl('/customerDashboard');
      })
     }else{
      alert("You have not made the payment.");
     }
  }
}