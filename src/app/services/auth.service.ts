import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  async login(email: string, password: string) {
    try {
      await this.afAuth.signInWithEmailAndPassword(email, password);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async logout() {
    try {
      await this.afAuth.signOut();
    } catch (error) {
      console.log(error);
    }
  }
  changeEmail(newEmail: string): Promise<void> {
    return this.afAuth.currentUser.then((user) => {
      if (user) {
        return user.updateEmail(newEmail);
      } else {
        throw new Error('User not logged in');
      }
    });
  }

  changePassword(newPassword: string): Promise<void> {
    return this.afAuth.currentUser.then((user) => {
      if (user) {
        return user.updatePassword(newPassword);
      } else {
        throw new Error('User not logged in');
      }
    });
  }
}
