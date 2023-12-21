import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorhover]'
})
export class ColorhoverDirective {
@HostBinding('style.backgroundColor') bg = "white"
  constructor() { }
  @HostListener('mooseenter') mooseenter (){
    this.bg = "red"
  }
  @HostListener('mooseleave') mooseleave (){
    this.bg = "#457A74"
  }

}
