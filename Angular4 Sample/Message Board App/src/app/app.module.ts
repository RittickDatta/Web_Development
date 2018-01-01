import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//New Imports
import { AngularFireModule} from 'angularfire2';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

export const firebaseConfig = {
  apiKey: "AIzaSyA_K1bCe12S1Fgyjata-afCuG0lqqBqD_Y",
  authDomain: "my-proj-29f73.firebaseapp.com",
  databaseURL: "https://my-proj-29f73.firebaseio.com",
  storageBucket: "my-proj-29f73.appspot.com",
  messagingSenderId: "822700027691"
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
