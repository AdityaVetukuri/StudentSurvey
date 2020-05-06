/* We packaged all the ngModels in our student.html to a object */
/*
Aditya Varma Vetukuri
Sai Ruchieatha Maanvi Thibirisetti
Sai Venkata Sucheta Pallempati
Kaushik Gedela
Jeevan Mamillapalli
*/



import { TestItem } from './model';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
export class Item {
  name: string;
  value: string;
}
export class CheckItem {
  name: string;
  value: string;
  checked: boolean;
}
//Radio button
export const ITEMS: Item[] = [
  {
    name: 'friends',
    value: 'friends',
  },
  {
    name: 'Television',
    value: 'television'
  },
  {
    name: 'Internet',
    value: 'Internet'
  },
  {
    name: 'Other',
    value: 'Other'
  },
];
export const checkBoxItem: CheckItem[] = [
  {
    name: 'Location',
    value: 'Location',
    checked: false
  },
  {
    name: 'Campus',
    value: 'Campus',
    checked: false
  },
  {
    name: 'Sports',
    value: 'Sports',
    checked: false
  },
  {
    name: 'Dorm Rooms',
    value: 'Dorm Rooms',
    checked: false
  },
  {
    name: 'Students',
    value: 'Students',
    checked: false
  },
];
//select drop down
export const selectItem: Item[] = [
  {
    name: 'Likely',
    value: '1'
  },
  {
    name: 'Very Likey',
    value: '2'
  },
  {
    name: 'Unlikely',
    value: '3'
  }
];


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  public item: TestItem = {};
  public form: FormGroup;
  public fb: FormBuilder;
  public formError: any;
  itemsList: Item[] = ITEMS;
  checkBoxList: Item[] = checkBoxItem;
  selectItemList: Item[] = selectItem;
  public disable: boolean;
  validationMessages = {
    jobTitle: { required: 'Job Title required'},
    jobCode: { required: 'Job Coderequired'},
    };
  constructor(private http: HttpClient) {
    this.itemsList = ITEMS;
    this.checkBoxList = checkBoxItem;
    this.selectItemList = selectItem;
   }


  ngOnInit() {
    let controls = {};
   // controls['firstName'] =  new FormControl('', Validators.required);
    //  this.form = new FormGroup(controls);
    this.item.university = "";
    this.form = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      streetAddress: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
      telePhone: new FormControl(''),
      email: new FormControl(''),
      date: new FormControl(''),
      recommend: new FormControl(''),
      university: new FormControl(''),
      mostLiked: new FormControl(''),
      raffle: new FormControl(''),
      comment: new FormControl(''),
   
    });

    this.item.radio = 'item_1';
    this.item.mostLiked  = ""
  }

  public onchange(value: string) {
    this.item.university = value;
    console.log(this.item.university);

  }
  public onCheckBoxchange(value: string, i: number,checked?: boolean) {
   // this.item.mostLiked = value;
    //const emailFormArray = this.form.controls.mostLiked as FormArray;
    //let item: any[] = [];
    if (checked) {
      this.item.mostLiked = value;
    } else {
      this.item.mostLiked = "";
    }
    console.log(this.item.mostLiked);

  }
  
  public onSelectchange(value: string) {
    this.item.recommend = value;
    console.log(this.item.recommend);

  }
  public submit() {
    //packaging our object
    const object: any = {
      "Address": this.item.streetAddress || "",
      "firstName": this.item.firstName || "",
      "lastName": this.item.lastName || "",
      "Recommend": this.item.recommend || "",
      "FavLocation": this.item.mostLiked, 
      "City": this.item.city || "",
      "Hobbies": this.item.university || "",
      "id": this.item.email || "",
      "State": this.item.state || "",
      "Survey_Date": this.item.date || "",
      "Telephone": this.item.telePhone || "", 
      "Zip": this.item.zip || "",
      "Email": this.item.email || ""
    };
      //Our http post function 
      let obs = this.http.post('https://vizsm4p902.execute-api.us-east-1.amazonaws.com/prod/survey', object);
      alert("Form has been submitted!");
      this.form.reset;
    obs.subscribe((response) => this.onSubmitAlert());
    }
  
  
  onSubmitAlert(){
    alert('Form Submitted !');
  }
 //Submit is disabled till all our fields are filled
   public onFormValid(): boolean {
    return this.disable = this.form.valid;
   }
}
