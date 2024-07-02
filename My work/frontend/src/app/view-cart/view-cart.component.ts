import { Component,OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Cart } from '../cart';


@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {
      
  cart: Cart[] = [];
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public cartService: CartService) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.cartService.getAll().subscribe((data: Cart[])=>{
      this.cart = data;
      console.log(this.cart);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deletePost(id:number){
    this.cartService.delete(id).subscribe(res => {
         this.cart = this.cart.filter(cart => cart.cId !== id);
         console.log('User deleted successfully!');
    })
  }
    
} 
