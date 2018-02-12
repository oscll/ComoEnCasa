import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

import { LocalesComponent } from './locales.component';
import { LocalDetailsComponent } from './localdetails.component';
import { SharedModule } from '../shared';


const localRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'locales',
    component: LocalesComponent,
  },
  {
    path: 'locales/:id',
    component: LocalDetailsComponent
  }
]);

@NgModule({
  imports: [
   localRouting,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'API GMAPS'
    })
  ],
  declarations: [
    LocalesComponent,
    LocalDetailsComponent
  ],
  providers: []
})
export class LocalesModule { }
