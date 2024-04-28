import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-control-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template-control-flow.component.html',
  styleUrl: './template-control-flow.component.scss',
})
export class TemplateControlFlowComponent {
  public isTrue: boolean = true;
}
