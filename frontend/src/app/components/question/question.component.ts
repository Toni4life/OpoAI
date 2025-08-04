import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
  questionText = '¿Cuál es la capital de España?';
  options = ['Madrid', 'Barcelona', 'Sevilla', 'Valencia'];
  selectedOption: string | null = null;

  selectOption(option: string) {
    this.selectedOption = option;
  }
}
