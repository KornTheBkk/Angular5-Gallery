import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {

  image: any;

  constructor(private route: ActivatedRoute, private imageService: ImageService) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    //console.log('id', id);
    this.image = this.imageService.getImage(id);
  }

}
