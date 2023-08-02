import {Component} from '@angular/core';
import {GalleryDataModel} from "./gallery-model";
import {ArtService} from "../../shared/services/art.service";

@Component({
  selector: 'galleria-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  galleryData: GalleryDataModel[] = [];
  constructor(private _artService: ArtService) {
    this.galleryData = this._artService.getAllArt();
  }
}
