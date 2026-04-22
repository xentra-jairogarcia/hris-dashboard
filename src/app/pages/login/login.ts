import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';
import { ButtonComponent } from '../../shared/atoms/button/button.component';

type LoginStep = 'email' | 'check-email' | 'verify' | 'signing-in';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private auth = inject(AuthService);
  private router = inject(Router);

  step: LoginStep = 'email';
  email = '';
  code = '';
  emailError = '';
  codeError = '';

  submitEmail(): void {
    this.emailError = '';
    const trimmed = this.email.trim();
    if (!trimmed) {
      this.emailError = 'Enter your email.';
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      this.emailError = 'Enter a valid email.';
      return;
    }
    if (!this.auth.findUser(trimmed)) {
      this.emailError = 'Account not found.';
      return;
    }
    this.email = trimmed;
    this.step = 'check-email';
  }

  goToVerify(): void {
    this.code = '';
    this.codeError = '';
    this.step = 'verify';
  }

  changeEmail(): void {
    this.step = 'email';
    this.code = '';
    this.codeError = '';
  }

  onCodeInput(value: string): void {
    this.code = value.replace(/\D/g, '').slice(0, 6);
    this.codeError = '';
  }

  submitCode(): void {
    if (this.code.length !== 6) {
      this.codeError = 'Enter the 6-digit code.';
      return;
    }
    this.step = 'signing-in';
    setTimeout(() => {
      const user = this.auth.login(this.email);
      if (user) this.router.navigateByUrl('/dashboard');
      else this.changeEmail();
    }, 900);
  }

  resendCode(): void {
    this.codeError = '';
    this.code = '';
  }
}
