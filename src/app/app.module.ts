import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { QuestionFormComponent } from './question-form/question-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';


@NgModule({
  bootstrap: [AppComponent],
  imports: [
    // other imports ...
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  declarations: [AppComponent, QuestionFormComponent],
  providers: [],

})
export class AppModule { }


// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
