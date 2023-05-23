// home.page.ts
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AlertController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';

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
    private afs: AngularFirestore,
    public alertController: AlertController
  ) {}

  async register() {
    const { name, surname, email, password } = this;
    try {
      const res = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      if (res.user) {
        // Save additional user data in Firestore
        await this.afs.collection('users').doc(res.user.uid).set({
          name,
          surname,
          email,
        });

        this.showAlert('Success', 'Welcome aboard!');
      }
    } catch (err) {
      console.dir(err);
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
