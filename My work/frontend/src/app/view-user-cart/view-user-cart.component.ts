import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../cart';


@Component({
  selector: 'app-view-user-cart',
  templateUrl: './view-user-cart.component.html',
  styleUrls: ['./view-user-cart.component.css']
})
export class ViewUserCartComponent implements OnInit {
  cId!: number;
  cart!: Cart;
  id!:number;
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public cartService: CartService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.cId = this.route.snapshot.params['cartId'];
        console.log(this.cId);
    this.cartService.find(this.cId).subscribe((data: Cart)=>{
      console.log(data);
      this.cart = data;
    });
  }
}

