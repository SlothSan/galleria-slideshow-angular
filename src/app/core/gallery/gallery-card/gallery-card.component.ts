import {Component, Input} from '@angular/core';

@Component({
  selector: 'galleria-gallery-card',
  templateUrl: './gallery-card.component.html',
  styleUrls: ['./gallery-card.component.scss']
})
export class GalleryCardComponent {
  @Input() artistName: string = '';
  @Input() thumbnailPainting: string = '';
  @Input() paintingTitle: string = '';
  @Input() paintingArtist: string = '';
  constructor() {
  }
}
