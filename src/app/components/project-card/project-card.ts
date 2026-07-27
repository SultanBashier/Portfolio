import { Component, Input, OnInit, OnChanges, SimpleChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../models/project.model';
import { TranslationService } from '../../services/translation';

@Component({
    selector: 'app-project-card',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './project-card.html',
    styleUrls: ['./project-card.css']
})
export class ProjectCardComponent implements OnInit, OnChanges {
    @Input() project!: Project;
    translationService = inject(TranslationService);

    translatedTitle: string = '';
    translatedCategory: string = '';
    translatedDescription: string = '';

    ngOnInit() {
        this.updateTranslation();
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['project']) {
            this.updateTranslation();
        }
    }

    updateTranslation() {
        if (!this.project) return;
        this.translatedTitle = this.project.title;
        this.translatedCategory = this.project.category;
        this.translatedDescription = this.project.description;
    }
}
