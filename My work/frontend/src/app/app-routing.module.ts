import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './signup/signup.component';
import { MenuComponent } from './menu/menu.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ViewItemsComponent } from './view-items/view-items.component';
import { CreateItemsComponent } from './create-items/create-items.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { ViewUserCartComponent } from './view-user-cart/view-user-cart.component';
import { FormsModule } from '@angular/forms';
import { PaymentComponent } from './payment/payment.component';
import { CardpaymentComponent } from './cardpayment/cardpayment.component';
import { CashondeliveryComponent } from './cashondelivery/cashondelivery.component';
import { OrderplacedComponent } from './orderplaced/orderplaced.component';
import { SpecsiphComponent } from './specsiph/specsiph.component';
import { IphofComponent } from './iphof/iphof.component';
import { SingleitemComponent } from './singleitem/singleitem.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { UserBookingsComponent } from './user-bookings/user-bookings.component';



const routes: Routes = [

  {path:"",component:IndexComponent},
  {path:"", redirectTo:"menu",pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"profile",component:ProfileComponent},
  {path:"about",component:AboutComponent},
  {path:"signup",component:SignupComponent},
  {path:"menu",component:MenuComponent},
  {path:"contactUs",component:ContactUsComponent},
  {path:"viewItems",component:ViewItemsComponent},
  {path:"adminDashboard",component:AdminDashboardComponent},
  {path:"customerDashboard",component:CustomerDashboardComponent},
  {path:"viewProfile/:userId",component:ViewProfileComponent},
  {path:"editProfile/:userId",component:EditProfileComponent},
  {path:"createAdmin",component:CreateItemsComponent},
  {path: "addToCart/:itemId", component: AddToCartComponent },
  {path:"viewCart",component:ViewCartComponent},
  {path:"viewUserCart/:cId",component:ViewUserCartComponent},
  {path:"formsModule",component:FormsModule},
  {path:"payment",component:PaymentComponent},
  {path:"cardpayment",component:CardpaymentComponent},
  {path:"cashondelivery",component:CashondeliveryComponent},
  {path:"orderplaced",component:OrderplacedComponent},
  {path:"specsiph",component:SpecsiphComponent},
  {path:"iphof",component:IphofComponent},
  {path:"singleItem/:id", component:SingleitemComponent },
  {path: "itemDetails/:itemId", component: ItemDetailsComponent},
  {path: "userbookings/:userId", component: UserBookingsComponent}
  

  
  

  

 
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
