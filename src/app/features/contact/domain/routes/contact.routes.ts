import { Routes } from '@angular/router';
import { ContactPageComponent } from '../../presentation/pages/contact-page.component/contact-page.component';
import { ContactTableComponent } from '../../presentation/components/contact-table.component/contact-table.component';
import { ContactInformationComponent } from '../../presentation/components/contact-information.component/contact-information.component';


export const ContactRoutes: Routes = [
  {
    path: '',
    component: ContactPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'table',
        pathMatch: 'full'
      },
      {
        path: 'table',
        component: ContactTableComponent,
      },
      {
        path: 'information/:id',
        component: ContactInformationComponent
      }
    ]
  } 
]
