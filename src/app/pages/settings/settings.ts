import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TabButtonComponent } from '../../shared/molecules/tab-button/tab-button.component';
import { ButtonComponent } from '../../shared/atoms/button/button.component';

@Component({
  selector: 'app-settings',
  imports: [FormsModule, TabButtonComponent, ButtonComponent],
  templateUrl: './settings.html',
  styleUrl: './settings.scss',
})
export class Settings {
  profile = {
    initials: 'AC',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    jobTitle: '',
    department: '',
  };

  saveChanges(): void {
    console.log('Profile saved:', this.profile);
  }

  cancel(): void {
    this.profile = {
      initials: 'AC',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      jobTitle: '',
      department: '',
    };
  }
}
