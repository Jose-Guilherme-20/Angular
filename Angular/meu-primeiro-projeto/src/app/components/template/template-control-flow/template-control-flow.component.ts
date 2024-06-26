import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-template-control-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template-control-flow.component.html',
  styleUrl: './template-control-flow.component.scss',
})
export class TemplateControlFlowComponent {
  public isTrue: boolean = true;

  public itens: Array<{ name: string }> = [{ name: 'José Guilherme' }];
  public loadingData$: Observable<string[]> = of([
    'item 1',
    'item 2',
    'item 3',
  ]).pipe(delay(3000));

  public trackByFn(index: number) {
    return index;
  }

  public addNewName(value: string) {
    return this.itens.push({ name: value });
  }
  public switchCase: string = 'B';
}
