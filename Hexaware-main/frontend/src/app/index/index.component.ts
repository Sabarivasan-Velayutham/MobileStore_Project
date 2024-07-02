import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  images = [
    {
      imageSrc:
      'assets/img/iphone14promax.jpg',
      imageAlt:'nature1',
    },
    {
      imageSrc:
        'assets/img/samsung.jpg',
      imageAlt: 'nature2',
    },
    {
      imageSrc:
        'assets/img/pixel.jpg',
      imageAlt: 'person1',
    },
    {
      imageSrc:
        'assets/img/oneplus.jpg',
      imageAlt: 'person2',
    },
  ]

}
