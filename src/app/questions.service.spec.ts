import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) {
  }

  public getJSON(fileId: string) {
    return this.http.get(`./assets/${fileId}.json`) as Observable<any>;
  }
}


// import { TestBed } from '@angular/core/testing';

// import { QuestionsService } from './questions.service';

// describe('QuestionsService', () => {
//   let service: QuestionsService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(QuestionsService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });

