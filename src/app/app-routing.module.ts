import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { SurveyComponent } from './survey/survey.component';

//Routing paths
const routes: Routes = [{path: 'student', component:StudentComponent},{path:'survey',component:SurveyComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
