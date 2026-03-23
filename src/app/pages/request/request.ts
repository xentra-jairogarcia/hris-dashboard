import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActionButtonComponent } from '../../shared/components/action-button/action-button.component';
import { TabButtonComponent } from '../../shared/components/tab-button/tab-button.component';
import { ViewDetailsLinkComponent } from '../../shared/components/view-details-link/view-details-link.component';

@Component({
  selector: 'app-request',
  imports: [RouterModule, ActionButtonComponent, TabButtonComponent, ViewDetailsLinkComponent],
  templateUrl: './request.html',
  styleUrl: './request.scss',
})
export class Request {}
