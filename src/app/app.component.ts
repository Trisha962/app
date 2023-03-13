import { formatDate } from '@angular/common';
import { Component, Inject, LOCALE_ID } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidator } from './customvalidator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  maxdate:Date= new Date();
  mindate:Date= new Date("2022/03/03");
  constructor(private fb:FormBuilder){}
  register=this.fb.group({
    firstname:['',[Validators.required,Validators.minLength(3)]],
    email:['',[Validators.email]],
    password:['',[Validators.minLength(8)]],
    date:['',[Validators.required,CustomValidator.datevalidator]],
    age:['',[this.agevalidator]]
  })
  //get gettername   set settername
  get getfirstname()
{
 return this.register.get("firstname")
}
 get getage()
 {
  return this.register.get("age");
 }
get getdate()
{
  return this.register.get("date");
}
agevalidator(data:FormControl)//key value pair or null
  {
      if(data.value>20)
      {
          return null;
      }
      else{
          return { ageError:true};
      }
  }
  get selectdate(){
    return this.register.get("selectdate");
  }

}
