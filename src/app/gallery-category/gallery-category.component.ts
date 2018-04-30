import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-gallery-category',
  templateUrl: './gallery-category.component.html',
  styleUrls: ['./gallery-category.component.css']
})
export class GalleryCategoryComponent implements OnInit {


  @Output() SelectCategoryEvent = new EventEmitter();
  @Input() category: string;

  constructor() { }

  ngOnInit() {
  }

  filterBy(category: string) {
    this.category = category;
    this.SelectCategoryEvent.emit(this.category);
  }

}
