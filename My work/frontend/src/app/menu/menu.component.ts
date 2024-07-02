import { Component, OnInit} from '@angular/core';
import { PostService } from '../post.service';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from '../post';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  
  //public item : any;
  searchKey:string="";
  public searchTerm : string = '';
  item: Post[] = [];


  constructor(private postService: PostService,
    private router: Router){
  }
  
  specsiph(){
    this.router.navigate(['/specsiph']);
  }
  
    ngOnInit(): void {
      this.postService.getAll()
      .subscribe(res=>{
        this.item= res;
        })
        this.postService.search.subscribe((val: any)=>{
          this.searchKey = val;
        })
    }
    search(event:any){
      this.searchTerm = (event.target as HTMLInputElement).value;
      console.log(this.searchTerm);
      this.postService.search.next(this.searchTerm);
    }
    // navigateToAddToCart(itemId: number) {
    //   // Use router.navigate to navigate to the AddToCartComponent with the itemId parameter
    //   this.router.navigate(['/addToCart', itemId]);
    // }
    
    navigateToAddToCart(itemId: number) {
      // Find the selected item based on the itemId
      const selectedItem = this.item.find((item) => item.itemId === itemId);
      console.log(selectedItem);
      
      if (selectedItem) {
        this.router.navigate(['/addToCart',itemId], { state: { selectedItem } });
      } else {
        console.error('Selected item not found.');
      }
    }

    
    
}
    

// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { PostService } from '../post.service';
// import { Post } from '../post';

// @Component({
//   selector: 'app-menu',
//   templateUrl: './menu.component.html',
//   styleUrls: ['./menu.component.css']
// })
// export class MenuComponent implements OnInit {
//   searchKey: string = "";
//   searchTerm: string = "";
//   items: Post[] = [];
  

//   constructor(private postService: PostService, private router: Router) {}

//   ngOnInit(): void {
//     this.postService.getAll().subscribe((res) => {
//       this.items = res;
//     });
//     this.postService.search.subscribe((val: any) => {
//       this.searchKey = val;
//     });
//   }

//   search(event: any) {
//     this.searchTerm = (event.target as HTMLInputElement).value;
//     this.postService.search.next(this.searchTerm);
//   }

//   // navigateToSingleItem(itemId: number) {
//   //   const selectedItem = this.items.find((item) => item.itemId === itemId);
    
//   //   if (selectedItem) {
//   //     this.router.navigate(['/singleItem', itemId], { state: { selectedItem } });
//   //   } else {
//   //     console.error('Selected item not found.');
//   //   }
//   // }
//   navigateToSingleItem(itemId: number) {
//     this.router.navigate(['/singleItem', itemId]);
//   }
  
// }
