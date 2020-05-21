import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { TailwindDemoComponent } from './component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'The Nexus';
  constructor(injector: Injector) {
    // Convert to a custom element.
    const tailwind = createCustomElement(TailwindDemoComponent, {injector});
    // Register the custom element with the browser.
    customElements.define('tailwind-demo', tailwind);
  }
}
