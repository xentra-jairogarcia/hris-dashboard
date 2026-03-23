import { Component } from '@angular/core';
import { PillTabButtonComponent } from '../../shared/components/pill-tab-button/pill-tab-button.component';
import { TabButtonComponent } from '../../shared/components/tab-button/tab-button.component';
import { ViewDetailsLinkComponent } from '../../shared/components/view-details-link/view-details-link.component';

@Component({
  selector: 'app-performance',
  imports: [PillTabButtonComponent, TabButtonComponent, ViewDetailsLinkComponent],
  templateUrl: './performance.html',
  styleUrl: './performance.scss',
})
export class Performance {}
