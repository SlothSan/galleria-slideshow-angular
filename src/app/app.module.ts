import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './core/gallery/gallery.component';
import { HeaderComponent } from './core/header/header.component';
import { IconsComponent } from './shared/icons/icons/icons.component';
import {NgOptimizedImage} from "@angular/common";
import { GalleryCardComponent } from './core/gallery/gallery-card/gallery-card.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    HeaderComponent,
    IconsComponent,
    GalleryCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
