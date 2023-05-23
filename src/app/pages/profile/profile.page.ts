import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
})
export class ProfilePage {
  newEmail: string = '';
  oldPassword: string = '';
  newPassword: string = '';
  message: string = ''; // Variable to store the message

  constructor(private authService: AuthService) {}

  changeEmail() {
    if (this.newEmail.trim() !== '') {
      this.authService
        .changeEmail(this.newEmail)
        .then(() => {
          this.message = 'Email changed successfully'; // Set the success message
        })
        .catch((error) => {
          this.message = 'Error changing email: ' + error.message; // Set the error message
        });
    }
  }

  changePassword() {
    if (this.oldPassword.trim() === '') {
      this.message = 'Old password is required'; // Set the error message
      return;
    }

    if (this.newPassword.trim() !== '') {
      this.authService
        .changePassword(this.newPassword)
        .then(() => {
          this.message = 'Password changed successfully'; // Set the success message
        })
        .catch((error) => {
          this.message = 'Error changing password: ' + error.message; // Set the error message
        });
    }
  }
}
