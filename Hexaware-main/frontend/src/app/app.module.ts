import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './signup/signup.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CarouselModule } from './carousel/carousel.module';

import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { ViewItemsComponent } from './view-items/view-items.component';
import { CreateItemsComponent } from './create-items/create-items.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { ViewUserCartComponent } from './view-user-cart/view-user-cart.component';
import { FilterPipe } from './filter.pipe';




@NgModule({

  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    NavbarComponent,
   
    ProfileComponent,
        AboutComponent,
        SignupComponent,
        AdminDashboardComponent,
        CustomerDashboardComponent,
        MenuComponent,
        ContactUsComponent,
        ViewProfileComponent,
        EditProfileComponent,
        ViewItemsComponent,
        CreateItemsComponent,
        AddToCartComponent,
        ViewCartComponent,
        ViewUserCartComponent,
        FilterPipe
        
        
        
        
        
   
        
        
       
        
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,ReactiveFormsModule,FormsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
