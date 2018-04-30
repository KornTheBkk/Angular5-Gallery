import { ActivatedRoute } from '@angular/router';
import { ImageService } from './../image.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit{

  images: Array<any>;
  category: string;

  constructor(private imageService: ImageService, private route: ActivatedRoute) { 
    
  }

  ngOnInit() {

    this.images = this.imageService.getImages();

    const cat = this.route.snapshot.params['category'];
    //console.log(cat);
    if (cat === '' || cat === undefined) {
      this.category = 'all';
    } else {
      this.category = cat;
    }
    
  }

  onSelectCategory(event) {
    //console.log(event);
    this.category = event;
  }

}
