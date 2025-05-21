import { Routes } from '@angular/router';
import { BordComponent } from './bord/bord.component';
import { HomepageComponent } from './homepage/homepage.component';

export const routes: Routes = [
    {path: '' , component: HomepageComponent },
    {path: 'bord' , component: BordComponent } 
];
