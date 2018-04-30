import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-category',
  templateUrl: './gallery-category.component.html',
  styleUrls: ['./gallery-category.component.css']
})
export class GalleryCategoryComponent implements OnInit {

  category: string = 'all';

  constructor() { }

  ngOnInit() {
  }

  filterBy(category: string) {
    this.category = category;
  }

}
