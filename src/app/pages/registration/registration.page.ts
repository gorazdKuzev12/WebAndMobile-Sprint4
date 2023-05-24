// home.page.ts
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: 'registration.page.html',
  styleUrls: ['registration.page.scss'],
})
export class RegistrationPage {
  name: string = '';
  surname: string = '';
  email: string = '';
  password: string = '';

  constructor(
    public afAuth: AngularFireAuth,
    public alertController: AlertController,
    private router: Router
  ) {}

  async register() {
    const { name, surname, email, password } = this;
    try {
      const res = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      this.showAlert('Success', 'Welcome aboard!');
      this.router.navigate(['/home']);
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
