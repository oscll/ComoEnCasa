import { ModuleWithProviders, NgModule } from '@angular/core';
/* import { CommonModule } from '@angular/common'; */
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

import { HomeComponent } from '../home/home.component';
import { SharedModule } from '../shared';
/* import { LocalesAuthResolver } from '../locales/locales-auth-resolver.service'; */
import { LocalesComponent} from '../locales/locales.component';


const localRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'locales',
    component: LocalesComponent,
   /*  resolve: {
      isAuthenticated: LocalesAuthResolver
    } */
  }
]);

@NgModule({
  imports: [
   /*  CommonModule, */
   localRouting,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'APIKEY GMAPS'
    })
  ],
  declarations: [
    LocalesComponent
  ],
  providers: [
  /*   LocalesAuthResolver */
  ]
})
export class LocalesModule { }
