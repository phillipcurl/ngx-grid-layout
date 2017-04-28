import { Component } from '@angular/core';

@Component({
  selector: 'grid-hello-world',
  template: 'Hello world from the {{ projectTitle }} module!'
})
export class HelloWorldComponent {
  projectTitle: string = 'ngx-grid-layout';
}
