import { Component, Input } from '@angular/core';

@Component({
  selector: 'salam',
  template: `<h1>Salam {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
