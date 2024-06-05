import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app1';
  fname:string = "Adam";
 lname :string = "Smith";
 age: number = 25;
 gender:string ="Male";
 country:string="India";
 isEmployed:boolean=false;

handleSubmitBtn(){
  this.fname ="Sujji";
  this.lname ="jangili";
this.age=25;
this.gender="Male";
this.country="India";
this.isEmployed=true;
}

}




