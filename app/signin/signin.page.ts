import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  constructor(private navcontroller:NavController) { }
  nav(url:string){
    this.navcontroller.navigateRoot(url);
  }

  ngOnInit() {
  }

}
