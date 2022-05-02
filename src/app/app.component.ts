import { Component, VERSION } from '@angular/core';
import { HelloComponent } from './hello.component';
import { HEROES } from './mock';
import { Hero } from './types';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  success = true;
  selectedHero?: Hero;
  superHeroes: Hero[] = HEROES;

  numberOfHeroes = this.superHeroes?.length;
  component = HelloComponent;
  currentComponent = null;

  color: string;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  renderComponent(): void {
    this.currentComponent = this.component;
  }
}
