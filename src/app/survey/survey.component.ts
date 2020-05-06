/* We use http.get and assign it to a object */
/*
Aditya Varma Vetukuri
Sai Ruchieatha Maanvi Thibirisetti
Sai Venkata Sucheta Pallempati
Kaushik Gedela
Jeevan Mamillapalli
*/
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  constructor(private http: HttpClient) { }
  studentList;
  
  ngOnInit() {
    //our get function using our REST API url.
    let obs = this.http.get('https://vizsm4p902.execute-api.us-east-1.amazonaws.com/prod/survey');
    obs.subscribe((response:any) => { 
      this.studentList = response.body; 
      console.log(response.body);
    });
    
  }


}
