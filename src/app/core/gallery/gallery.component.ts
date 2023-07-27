import {Component, OnInit} from '@angular/core';
import GalleryData from '../../../assets/data.json';
import {GalleryDataModel} from "./gallery-model";
import {Observable} from "rxjs";

@Component({
  selector: 'galleria-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  galleryData: GalleryDataModel[] = GalleryData;
  constructor() {
  }

  ngOnInit(): void {
    console.log(this.galleryData)
  }


}
