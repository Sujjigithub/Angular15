import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
//import bootstrap from "../main.server";
import { NgModule } from "@angular/core";
@NgModule({
  declarations:[
    AppComponent
  ],
  imports:[
    BrowserModule,

    FormsModule,
  ],
  providers:[],
  bootstrap:[AppComponent]
})
export class AppModule{ }




