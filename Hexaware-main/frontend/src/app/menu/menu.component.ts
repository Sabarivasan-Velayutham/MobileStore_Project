import { Component, OnInit} from '@angular/core';
import { PostService } from '../post.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  
  public item : any;
  searchKey:string="";
  public searchTerm : string = '';
  constructor(private postService: PostService){
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

    
    
}
    

