import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
  <section>
    <h1>Hello superHero!</h1>
    <img width="100" src="https://lumiere-a.akamaihd.net/v1/images/image_b97b56f3.jpeg?region=0%2C0%2C540%2C810" alt="superhero" />
  </section>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() name: string;
}
