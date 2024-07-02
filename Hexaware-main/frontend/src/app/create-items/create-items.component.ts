import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-items',
  templateUrl: './create-items.component.html',
  styleUrls: ['./create-items.component.css']
})
export class CreateItemsComponent implements OnInit {
  form!: FormGroup;
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
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

      itemName : new FormControl('', [Validators.required]),
      itemPrice: new FormControl('', Validators.required),
      itemSpecification: new FormControl('',Validators.required),
      itemStorage: new FormControl('', Validators.required),
      itemColour: new FormControl('', Validators.required),
      itemAvailability: new FormControl('', Validators.required),
      itemImages: new FormControl('',Validators.required)
    });
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
    this.postService.create(this.form.value).subscribe((res:any) => {
         console.log('User created successfully!');
         alert('Item added successfully');
         this.router.navigateByUrl('/viewItems');
    })
  }
  
}
