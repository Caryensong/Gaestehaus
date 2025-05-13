import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ApartmentsInfoComponent } from './main-content/apartments/apartments-info/apartments-info.component';
import { ZimmerInfoComponent } from './main-content/zimmer/zimmer-info/zimmer-info.component';
import { PolicyComponent } from './shared/components/policy/policy.component';
import { ImprintComponent } from './shared/components/imprint/imprint.component';

export const routes: Routes = [
    {path:"", component:MainContentComponent},
    {path:"apartmentInfo", component: ApartmentsInfoComponent},
    {path:"zimmerInfo", component: ZimmerInfoComponent},
    {path:"policy", component: PolicyComponent},
    {path:"imprint", component: ImprintComponent}
];
