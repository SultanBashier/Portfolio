import { Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio';

export const routes: Routes = [
    { path: '', component: PortfolioComponent },
    { path: '**', redirectTo: '' }
];