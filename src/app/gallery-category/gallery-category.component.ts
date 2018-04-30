import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gallery-category',
  templateUrl: './gallery-category.component.html',
  styleUrls: ['./gallery-category.component.css']
})
export class GalleryCategoryComponent implements OnInit {

  category: string = 'all';

  @Output() public SelectCategoryEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  filterBy(category: string) {
    this.category = category;
    this.SelectCategoryEvent.emit(this.category);
  }

}
