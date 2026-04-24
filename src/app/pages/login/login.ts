import { Component, inject, ViewChildren, QueryList, ElementRef } from '@angular/core';
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
  emailError = '';
  codeError = '';

  otpDigits: string[] = ['', '', '', '', '', ''];

  @ViewChildren('otpInput') otpInputs!: QueryList<ElementRef<HTMLInputElement>>;

  get code(): string {
    return this.otpDigits.join('');
  }

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
    this.otpDigits = ['', '', '', '', '', ''];
    this.codeError = '';
    this.step = 'verify';
  }

  changeEmail(): void {
    this.step = 'email';
    this.otpDigits = ['', '', '', '', '', ''];
    this.codeError = '';
  }

  onOtpKeydown(event: KeyboardEvent, index: number): void {
    const inputs = this.otpInputs.toArray();

    if (event.key === 'Backspace') {
      if (this.otpDigits[index] !== '') {
        this.otpDigits[index] = '';
      } else if (index > 0) {
        this.otpDigits[index - 1] = '';
        inputs[index - 1].nativeElement.focus();
      }
      this.codeError = '';
      event.preventDefault();
    } else if (event.key === 'ArrowLeft' && index > 0) {
      inputs[index - 1].nativeElement.focus();
    } else if (event.key === 'ArrowRight' && index < 5) {
      inputs[index + 1].nativeElement.focus();
    }
  }

  onOtpInput(event: Event, index: number): void {
    const input = event.target as HTMLInputElement;
    const val = input.value.replace(/\D/g, '').slice(-1);
    this.otpDigits[index] = val;
    this.codeError = '';

    if (val && index < 5) {
      const inputs = this.otpInputs.toArray();
      inputs[index + 1].nativeElement.focus();
    }
  }

  onOtpPaste(event: ClipboardEvent): void {
    event.preventDefault();
    const pasted = event.clipboardData?.getData('text') ?? '';
    const digits = pasted.replace(/\D/g, '').slice(0, 6).split('');
    digits.forEach((d, i) => {
      this.otpDigits[i] = d;
    });
    const inputs = this.otpInputs.toArray();
    const focusIndex = Math.min(digits.length, 5);
    inputs[focusIndex].nativeElement.focus();
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
    this.otpDigits = ['', '', '', '', '', ''];
  }
}