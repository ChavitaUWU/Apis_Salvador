import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navcontroller:NavController) {}

  nav(url:string){
this.navcontroller.navigateRoot(url);
  }
}


const firebaseConfig = {
  apiKey: "AIzaSyB7M7y-BtoN6nUf5qDcdc1m3B7rPpa_L9w",
  authDomain: "proyecto4b-1926b.firebaseapp.com",
  projectId: "proyecto4b-1926b",
  storageBucket: "proyecto4b-1926b.appspot.com",
  messagingSenderId: "45734601179",
  appId: "1:45734601179:web:c63097e92753defb4847fe"
};
