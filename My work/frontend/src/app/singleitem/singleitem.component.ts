// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { Post } from '../post';

// @Component({
//   selector: 'app-singleitem',
//   templateUrl: './singleitem.component.html',
//   styleUrls: ['./singleitem.component.css']
// })
// export class SingleitemComponent implements OnInit {
//   selectedItem: any;
//   items : any;

//   constructor(private route: ActivatedRoute) {}

//   ngOnInit(): void {
//     this.route.params.subscribe((params) => {
//       const itemId = params['id'];
//       // Retrieve the item details using itemId (You'll need to fetch it from your data source)
//       // For this example, let's assume you have an items array containing all the items
//       this.selectedItem = this.items.find((item: { itemId: any; }) => item.itemId == itemId);
//     });
//   }
// }
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { Post } from '../post'; // Import your data model
// import { PostService } from '../post.service'; // Import your data service

// @Component({
//   selector: 'app-singleitem',
//   templateUrl: './singleitem.component.html',
//   styleUrls: ['./singleitem.component.css']
// })
// export class SingleitemComponent implements OnInit {
//   selectedItem!: Post; // Adjust the type to match your data model

//   constructor(private route: ActivatedRoute, private postService: PostService) {}

//   ngOnInit(): void {
//     this.route.params.subscribe((params) => {
//       const itemId = +params['id']; // Convert the id to a number

//       // Fetch the selected item from your data source
//       this.postService.getItemById(itemId).subscribe((item: Post) => {
//         this.selectedItem = item;
//       });
//     });
//   }
// }
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../post'; // Import your data model
import { PostService } from '../post.service'; // Import your data service

@Component({
  selector: 'app-singleitem',
  templateUrl: './singleitem.component.html',
  styleUrls: ['./singleitem.component.css']
})
export class SingleitemComponent implements OnInit {
  selectedItem!: Post; // Adjust the type to match your data model

  constructor(private route: ActivatedRoute, private postService: PostService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const itemId = +params['id']; // Convert the id to a number

      // Fetch the selected item from your data source
      this.selectedItem = this.postService.getItemById(itemId); // Assuming your service returns the item directly
    });
  }
}

