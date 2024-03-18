import { Component } from '@angular/core';
import axios from 'axios';
import { RedireccionamientoService } from '../services/redireccionamiento.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-moneyconversion',
  templateUrl: './moneyconversion.page.html',
  styleUrls: ['./moneyconversion.page.scss'],
})
export class MoneyconversionPage {
  coversionoption: string[][] = [
  
    ['USD','Dólar Estadounidense'],

    ['MXN', 'Peso Mexicano'],
   
    ['JPY', 'Yen Japonés'],
   
  ];
  enter:string='';
  nenter:any;
  exit:string='';
  nexit:any;

  constructor(private redireccionamiento:RedireccionamientoService, private navcontroller:NavController) {}

  async conversion(){
    try {
      if(this.enter && this.nenter && this.exit){
        const respuesta = await axios.get(`http://localhost:3000/conversion/${this.enter}/${this.exit}`);
        let en=respuesta.data.data[this.enter];
        let ex=respuesta.data.data[this.exit];
        let res=((this.nenter*ex)/en).toFixed(2);
        this.nexit=this.nenter+' '+this.enter+' ▶ '+res+' '+this.exit;
      }else{alert('Rellena los campos requeridos.')}
    } catch (error) {
      console.error(error);
    }
  }

  nav(data:string){
    this.redireccionamiento.redireccion(data);
  }
}
