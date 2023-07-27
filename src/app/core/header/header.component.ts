import {Component, HostListener} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'galleria-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMobile: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  @HostListener('window:resize', ['$event'])
  onResizeMobile(event: any): void {
    this.isMobile.next(window.innerWidth <= 992)
  }
  constructor() {
  }

}
