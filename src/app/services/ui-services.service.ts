import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UiServicesService {

  constructor( private alrtCtrl: AlertController,
               private toastCtrl: ToastController ) { }

  async alertaInformativa( message: string ) {
    const alert = await this.alrtCtrl.create({
      header: 'Alerta',
      message,
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentToast( message: string ) {
    const toast = await this.toastCtrl.create({
      message,
      position: 'top',
      duration: 1500
    });
    toast.present();
  }

}
