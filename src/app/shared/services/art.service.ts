import { Injectable } from '@angular/core';
import GalleryData from '../../../assets/data.json';
import {GalleryDataModel} from "../../core/gallery/gallery-model";


@Injectable({
  providedIn: 'root'
})
export class ArtService {
  galleryData: GalleryDataModel[] = GalleryData
  constructor() { }

  getArtByName(name: string): GalleryDataModel[] {
    return this.galleryData.filter((art) => art.name === name)
  }

  getAllArt(): GalleryDataModel[] {
    return this.galleryData;
  }
}
