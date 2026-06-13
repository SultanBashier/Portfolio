import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation';

@Component({
    selector: 'app-timeline',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './timeline.html',
    styleUrls: ['./timeline.css']
})
export class TimelineComponent {
    translationService = inject(TranslationService);
}