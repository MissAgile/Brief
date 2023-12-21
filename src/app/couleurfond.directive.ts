import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCouleurfond]'
})
export class CouleurfondDirective {
@HostBinding ('style.backgroundColor') backgroundColor: string;
  constructor() {
    this.backgroundColor = "#457A74"
  }


}
