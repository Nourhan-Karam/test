import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  userName:string="";
 userage:string='';
 userEmail:string='';
 userpassword:string='';

  // inputValue:number= 0;
  // constructor(){}
  // updateInputValue(newValue:number){
  //   this.inputValue=newValue;
  // }
}
