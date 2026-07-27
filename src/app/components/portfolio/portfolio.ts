import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar';
import { HeroComponent } from '../hero/hero';
import { StatsComponent } from '../stats/stats';
import { ServicesComponent } from '../services/services';
import { SkillsComponent } from '../skills/skills';
import { ProjectCardComponent } from '../project-card/project-card';
import { TimelineComponent } from '../timeline/timeline';
import { ExperienceComponent } from '../experience/experience';
import { ContactComponent } from '../contact/contact';
import { FooterComponent } from '../footer/footer';
import { Project } from '../../models/project.model';
import { TranslationService } from '../../services/translation';
import { ProjectService } from '../../services/project.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-portfolio',
    standalone: true,
    imports: [
        CommonModule,
        NavbarComponent,
        HeroComponent,
        StatsComponent,
        ServicesComponent,
        SkillsComponent,
        ProjectCardComponent,
        ExperienceComponent,
        TimelineComponent,
        ContactComponent,
        FooterComponent
    ],
    templateUrl: './portfolio.html',
    styleUrls: ['./portfolio.css']
})
export class PortfolioComponent implements OnInit, OnDestroy {
    translationService = inject(TranslationService);
    projectService = inject(ProjectService);
    projects: Project[] = [];
    private langSub: Subscription | null = null;

    ngOnInit() {
        this.loadProjects();
        this.langSub = this.translationService.languageChanged.subscribe(() => {
            this.loadProjects();
        });
    }

    ngOnDestroy() {
        this.langSub?.unsubscribe();
    }

    loadProjects() {
        this.projectService.getProjects().subscribe({
            next: (data) => this.projects = data,
            error: (err) => console.error('Failed to load projects', err)
        });
    }
}
