import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation';

@Component({
    selector: 'app-services',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './services.html',
    styleUrls: ['./services.css']
})
export class ServicesComponent {
    translationService = inject(TranslationService);
}