import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
})
export class ProfilePage {
  newName: string = '';
  newSurname: string = '';

  constructor(private authService: AuthService) {}

  changeNameSurname() {
    this.authService.updateNameSurname(this.newName, this.newSurname);
  }

  // Add these two methods
  get name(): string {
    return this.authService.name;
  }

  get surname(): string {
    return this.authService.surname;
  }
}
