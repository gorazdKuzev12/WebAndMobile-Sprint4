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

  private _name: string = 'Gorazd';
  private _surname: string = 'Kuzev';

  // Accessor methods for name and surname
  get name(): string {
    return this._name;
  }

  get surname(): string {
    return this._surname;
  }

  // Method to update name and surname locally
  updateNameSurname(name: string, surname: string): void {
    this._name = name;
    this._surname = surname;
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
