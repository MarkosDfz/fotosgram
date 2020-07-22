import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanatizerPipe } from './dom-sanatizer.pipe';
import { ImgSanatizerPipe } from './img-sanatizer.pipe';
import { ImagenPipe } from './imagen.pipe';



@NgModule({
  declarations: [DomSanatizerPipe, ImgSanatizerPipe, ImagenPipe],
  imports: [
    CommonModule
  ],
  exports: [
    DomSanatizerPipe,
    ImgSanatizerPipe,
    ImagenPipe
  ]
})
export class PipesModule { }
