import {Component, OnInit} from '@angular/core';
import {GalleryDataModel} from "../gallery/gallery-model";
import {ActivatedRoute} from "@angular/router";
import {ArtService} from "../../shared/services/art.service";
@Component({
  selector: 'galleria-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.scss']
})
export class ArtComponent implements OnInit{
  name: string;
  art: GalleryDataModel;

  constructor(private _route: ActivatedRoute,
              private _artService: ArtService) {
    this.name = this._route.snapshot.params['name'];
    this.art = this._artService.getArtByName(this.name)[0];
  }

  ngOnInit() {
  }

}
