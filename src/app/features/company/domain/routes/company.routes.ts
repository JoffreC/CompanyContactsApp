import { Routes } from '@angular/router';
import { CompanyPageComponent } from '../../presentation/pages/company-page.component/company-page.component';
import { CompanyTableComponent } from '../../presentation/components/company-table.component/company-table.component';
import { CompanyInformationComponent } from '../../presentation/components/company-information.component/company-information.component';


export const CompanyRoutes: Routes = [
  {
    path: '',
    component: CompanyPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'table',
        pathMatch: 'full'
      },
      {
        path: 'table',
        component: CompanyTableComponent,
      },
      {
        path: 'information/:id',
        component: CompanyInformationComponent
      }
    ]
  } 
]
