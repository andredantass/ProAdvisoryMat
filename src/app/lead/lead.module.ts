import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';
import { LeadRoutes } from './lead.routing';

import { ListLeadComponent } from './listlead/listlead.component'
import { NewLeadComponent } from './newlead/newlead.component'


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LeadRoutes),
    FormsModule,
    MaterialModule
  ],
  declarations: [
    ListLeadComponent,
    NewLeadComponent 
  ]
})

export class LeadModule {}
