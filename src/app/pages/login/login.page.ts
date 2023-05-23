import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  async login() {
    const success = await this.authService.login(this.email, this.password);
    if (!success) {
      this.errorMessage = 'Email or password is incorrect';
    } else {
      this.router.navigate(['/home']);
    }
  }

  goToRegister() {
    this.router.navigate(['/registration']);
  }
}
