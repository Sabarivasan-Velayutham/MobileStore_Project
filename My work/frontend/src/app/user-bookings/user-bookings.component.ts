import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { UserService } from '../user.service';
import { Cart } from '../cart';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-user-bookings',
  templateUrl: './user-bookings.component.html',
  styleUrls: ['./user-bookings.component.css']
})
export class UserBookingsComponent {
  carts:Cart[] = [];
  userId!: number;
  constructor(
    public userService: UserService,
    private cartService:CartService,
    private route: ActivatedRoute,
    private router: Router,
    private http:HttpClient
  ) { }
  
  ngOnInit(): void {
    
    this.userId = this.route.snapshot.params['userId'];
    console.log('User ID:', this.userId);
    this.cartService.getBookingsByUserId(this.userId).subscribe((i: Cart[])=>{
      this.carts = i;
      console.log(this.carts);
    
    });
      }

}

