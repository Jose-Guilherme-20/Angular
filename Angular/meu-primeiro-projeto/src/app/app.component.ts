import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleComponent } from './components/title/title.component';
import { TemplateControlFlowComponent } from './components/template/template-control-flow/template-control-flow.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TitleComponent, TemplateControlFlowComponent],
  template: `
    <router-outlet />
    <app-template-control-flow />
    <app-title />
  `,
})
export class AppComponent {
  public name: string = 'José Guilherme';
}
