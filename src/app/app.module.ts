import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdlModule } from '@angular-mdl/core';
import { AppComponent } from './app.component';
import {database, initializeApp} from "firebase";
import {firebaseConfig} from "../../firebase.config";
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireAuthModule} from "angularfire2/auth";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
     MdlModule, 
    AngularFireModule.initializeApp(firebaseConfig),
     AngularFireDatabaseModule,
     AngularFireModule
  
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
