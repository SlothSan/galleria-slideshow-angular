import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GalleryComponent} from "./core/gallery/gallery.component";
import {ArtComponent} from "./core/art/art.component";

const routes: Routes = [
  {path: '', redirectTo: '/galleria', pathMatch: 'full'},
  {path: 'galleria', component: GalleryComponent},
  {path: 'galleria/art/:name', component: ArtComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
