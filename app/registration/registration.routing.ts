import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationComponent } from './registration.component';
import { RegistrationStep1Component } from './registration-step1.component';
import { RegistrationStep2Component } from './registration-step2.component';

const registrationRoutes: Routes = [
  {
    path: 'register',
    component: RegistrationComponent,
    children: [
      { path: '', redirectTo: 'step1', pathMatch: 'full' },
      { path: 'step1', component: RegistrationStep1Component },
      { path: 'step2', component: RegistrationStep2Component }
    ]
  }
]

export const routing: ModuleWithProviders = RouterModule.forChild(registrationRoutes);