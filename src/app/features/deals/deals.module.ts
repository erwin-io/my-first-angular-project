import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { AlertModule } from '../../ui/alert/alert.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DealsByContactComponent } from './deals-by-contact/deals-by-contact.component';
import { DealFormComponent } from './deal-form/deal-form.component';
import { EditDealComponent } from './edit-deal/edit-deal.component';
import { AddDealComponent } from './add-deal/add-deal.component';
import { ViewDealComponent } from './view-deal/view-deal.component';
import { StageProgressBarComponent } from './stage-progress-bar/stage-progress-bar.component';

 
export const routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-deal' },
  {
    path: 'add-deal',
    component: AddDealComponent,
    data: {
      breadcrumb: 'Add Deal'
    }
  },
  {
    path: 'edit-deal',
    component: EditDealComponent,
    data: {
      breadcrumb: 'Edit Deal',
      pauseDisplay: true
    }
  },
  {
    path: 'view-deal',
    component: ViewDealComponent,
    data: {
      breadcrumb: 'View Deal',
      pauseDisplay: true
    }
  }
];


@NgModule({
  declarations: [
    DealsByContactComponent,
    DealFormComponent,
    EditDealComponent,
    AddDealComponent,
    ViewDealComponent,
    StageProgressBarComponent
  ],
  exports: [
    DealsByContactComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    AlertModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    RouterModule.forChild(routes)
  ]
})
export class DealsModule { }
