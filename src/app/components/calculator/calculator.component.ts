import { SelectorContext } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent {
  stringDisplay = '';

  handleDisplay(value: string) {
    this.stringDisplay += value.replace("*", "×").replace("/", "÷");
  }

  calculate() {
    try {
      this.stringDisplay = eval(this.stringDisplay.replace("×", "*").replace("÷", "/"));
    } catch (e) {
      this.stringDisplay = 'Error'
    }
  }

  clear() {
    this.stringDisplay = '';
  }

}
