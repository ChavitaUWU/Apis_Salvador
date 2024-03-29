import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  showPass:boolean = false;
  user:string = '';
  password:string = '';

  constructor(private navcontroller:NavController, private alertController:AlertController) { }

nav(url:string){
  this.navcontroller.navigateRoot(url);
}

  ngOnInit() {
  }
  togglePassword(){
    this.showPass = !this.showPass;
  }
  async mandarMensaje(mensaje:string,titulo:string){




    const alerta = await this.alertController.create({
      header:titulo,
      message:mensaje,
      buttons:['cerrar']
    });
    await alerta.present();
  }
  async login(){
    await this.mandarMensaje('Crea una cuenta bro', 'Alerta');
  }
}
