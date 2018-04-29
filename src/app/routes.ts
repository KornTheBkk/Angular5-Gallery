import { Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';

export const appRoutes: Routes = [
    { path: 'gallery', component: GalleryComponent },
    { path: 'image/:id', component: ImageDetailComponent },
    { path: '', redirectTo: '/gallery', pathMatch: 'full' }
];