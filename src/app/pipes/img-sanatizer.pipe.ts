import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'imgSanatizer'
})
export class ImgSanatizerPipe implements PipeTransform {

  constructor( private domSanitezer: DomSanitizer ) {}

  transform( img: any ): any {
    return this.domSanitezer.bypassSecurityTrustUrl( img );
  }

}
