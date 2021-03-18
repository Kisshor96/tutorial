import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { GallaryComponent } from './components/gallary/gallary.component';
import { HomeComponent } from './components/home/home.component';
import { ItemsComponent } from './components/items/items.component';
import { LoginComponent } from './components/login/login.component';
import { PhotosComponent } from './components/photos/photos.component';
import { ProductsComponent } from './components/products/products.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'products', component: ProductsComponent, children: [
    {path: 'products/:id', component: ItemsComponent}
  ]},
  {path: 'gallery', component: GallaryComponent, children: [
    {path: 'gallery/:id', component: PhotosComponent}
  ]},
  {path: 'contact', component: ContactComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
