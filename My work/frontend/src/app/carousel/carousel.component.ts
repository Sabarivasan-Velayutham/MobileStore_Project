import { Component, Input,OnInit } from '@angular/core';

interface carouselImage{
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit{

 @Input() images: carouselImage[] = []
 @Input() indicators = true;
 @Input() controls = true;
 @Input() autoSlide = false;
 @Input() slideInterval = 3000;
   

 selectIndex = 0;

 ngOnInit(): void{
  if(this.autoSlide){
    this.autoSlideImages();
  }
 }

 autoSlideImages(): void{
  setInterval(() => {
    this.onNextClick();
  }, this.slideInterval);
 }

selectImage(index: number): void{
  this.selectIndex = index;
}

onPrevClick(): void{
  if(this.selectIndex === 0){
    this.selectIndex = this.images.length - 1;
  }
  else{
    this.selectIndex--;
  }
}

onNextClick(): void{
  if(this.selectIndex === this.images.length -1){
    this.selectIndex = 0;
}
else{
  this.selectIndex++;
}
}
}
