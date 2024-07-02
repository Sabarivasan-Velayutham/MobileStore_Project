// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-item-details',
//   templateUrl: './item-details.component.html',
//   styleUrls: ['./item-details.component.css']
// })
// export class ItemDetailsComponent {

// }
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { PostService } from '../post.service'; // Import your service for fetching item details
// import { Post } from '../post'; // Import your Post model

// @Component({
//   selector: 'app-item-details',
//   templateUrl: './item-details.component.html',
//   styleUrls: ['./item-details.component.css']
// })
// export class ItemDetailsComponent implements OnInit {
//   itemId!: number;
//   item!: Post; // Assuming Post is your model for item details

//   constructor(
//     private route: ActivatedRoute,
//     private router: Router,
//     private postService: PostService
//   ) {}

//   ngOnInit(): void {
//     this.route.params.subscribe(params => {
//       this.itemId = +params['itemId']; // Get the itemId from the route
//       this.loadItemDetails(this.itemId);
//     });
//   }

//   loadItemDetails(itemId: number) {
//     // Use your service to fetch item details by itemId
//     this.postService.getItemById(itemId).subscribe((data: Post) => {
//       this.item = data;
//     });
//   }
// }
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { PostService } from '../post.service';
// import { Post } from '../post';

// @Component({
//   selector: 'app-item-details',
//   templateUrl: './item-details.component.html',
//   styleUrls: ['./item-details.component.css']
// })
// export class ItemDetailsComponent implements OnInit {
//   itemId!: number;
//   item!: Post; // Use the Safe Navigation Operator

//   constructor(
//     private route: ActivatedRoute,
//     private router: Router,
//     private postService: PostService
//   ) {}

//   ngOnInit(): void {
//     this.route.params.subscribe(params => {
//       this.itemId = +params['itemId'];
//       this.loadItemDetails(this.itemId);
//     });
//   }

//   loadItemDetails(itemId: number) {
//     this.postService.getItemById(itemId).subscribe((data: Post) => {
//       this.item = data;
//     });
//   }
// }
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css'],
})
export class ItemDetailsComponent implements OnInit {
  item!: Post;
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  // ngOnInit(): void {
  //   this.route.paramMap.subscribe((params) => {
  //     const itemId = params.get('itemId');

  //     // Fetch item details using the postService
  //     this.postService.getItemById(itemId).subscribe((data: Post) => {
  //       this.item = data;

  //       // You can now access the item details and display them in your template
  //     }
  //     );
  //   });
  // }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['itemId'];
        
    this.postService.find(this.id).subscribe((i: Post)=>{
      this.item = i;
      console.log(this.item);

    });
  }
}
