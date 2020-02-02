import { Routes, RouterModule } from '@angular/router';

import { FormComponent } from './form';
import { ResultComponent } from './result';

const routes: Routes = [
    { path: '', component: FormComponent },
    { path: 'result', component: ResultComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);