import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'contact',
        pathMatch: 'full'
    },
    {
        path: 'contact',
        loadChildren: () => import('./features/contact/domain/routes/contact.routes').then(m => m.ContactRoutes),
    },
    {
        path: 'company',
        loadChildren: () => import('./features/company/domain/routes/company.routes').then(m => m.CompanyRoutes),
    },

];
