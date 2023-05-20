import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-registration',
  templateUrl: 'registration.page.html',
  styleUrls: ['registration.page.scss'],
})
export class RegistrationPage {
  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase
  ) {}

  register(email: string, password: string) {
    this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        // Registration successful
        console.log(res);
        // Create a reference to the user's profile in the database
        let userRef = this.db.list('users').push({
          email: email,
          // remove the password here
        });
      })
      .catch((error) => {
        // Handle Errors
        console.log(error);
      });
  }
}
