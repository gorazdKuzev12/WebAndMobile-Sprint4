// home.page.ts
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email: string = '';
  password: string = '';

  constructor(
    public afAuth: AngularFireAuth,
    public alertController: AlertController
  ) {}

  async register() {
    const { email, password } = this;
    try {
      const res = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(res);
      this.showAlert('Success', 'Welcome aboard!');
    } catch (err) {
      console.dir(err);
      // this.showAlert('Error', err.message);
    }
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['Ok'],
    });

    await alert.present();
  }
}
