import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation';

@Component({
    selector: 'app-skills',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './skills.html',
    styleUrls: ['./skills.css']
})
export class SkillsComponent {
    translationService = inject(TranslationService);
}