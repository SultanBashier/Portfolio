import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './components/portfolio/portfolio';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, PortfolioComponent],
    templateUrl: './app.html',
    styleUrls: ['./app.css']
})
export class AppComponent {}