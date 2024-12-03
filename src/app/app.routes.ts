import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GalleryComponent } from './gallery/gallery.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: '**', redirectTo: '' } 
];
