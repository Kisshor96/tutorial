import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { GallaryComponent } from './components/gallary/gallary.component';
import { ContactComponent } from './components/contact/contact.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { ItemsComponent } from './components/items/items.component';
import { PhotosComponent } from './components/photos/photos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    GallaryComponent,
    ContactComponent,
    MenuComponent,
    ItemsComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
