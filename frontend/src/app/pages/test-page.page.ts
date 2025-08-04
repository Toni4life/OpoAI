import { Component } from '@angular/core';
import { QuestionComponent } from '../components/question/question.component';

@Component({
  selector: 'app-test-page',
  standalone: true,
  imports: [QuestionComponent],
  templateUrl: './test-page.page.html',
  styleUrls: ['./test-page.page.scss']
})
export class TestPagePage {}
