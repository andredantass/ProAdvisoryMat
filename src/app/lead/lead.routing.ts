import { Routes } from '@angular/router';

import { ListLeadComponent } from './listlead/listlead.component'
import { NewLeadComponent } from './newlead/newlead.component'

export const LeadRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'listlead',
      component: ListLeadComponent
    }]
  }, {
    path: '',
    children: [{
      path: 'newlead',
      component: NewLeadComponent
    }]
  }
];
