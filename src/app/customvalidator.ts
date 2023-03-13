import { formatDate } from "@angular/common";
import { AbstractControl, FormControl } from "@angular/forms";


export class CustomValidator{
//variablename:datatype 
  
   static datevalidator(date:FormControl)
   {
     var today=formatDate(new Date(),"yyyy-MM-dd","en-in");
     if(date.value<today)
     {
        
          return null;
     }
     else{
      
        return {dateError:true};
     }
   }
}