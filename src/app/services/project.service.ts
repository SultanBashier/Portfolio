import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Project } from '../models/project.model';
import { TranslationService } from './translation';

@Injectable({ providedIn: 'root' })
export class ProjectService {
    private http = inject(HttpClient);
    private translationService = inject(TranslationService);

    getProjects(): Observable<Project[]> {
        const lang = this.translationService.currentLang();
        const path = 'assets/i18n/' + lang + '.json';
        return this.http.get<{ projects: Project[] }>(path).pipe(
            map(data => data.projects)
        );
    }
}
