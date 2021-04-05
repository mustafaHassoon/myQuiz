
import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';
import { Quiz } from '../quiz.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  quizzes: any[];

  constructor(public questionsService: QuestionsService) {
    questionsService.getQuizzes().subscribe((response) => {
      this.quizzes = response;
    });
  }

  ngOnInit(): void { }
}


// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-welcome',
//   templateUrl: './welcome.component.html',
//   styleUrls: ['./welcome.component.scss']
// })
// export class WelcomeComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
