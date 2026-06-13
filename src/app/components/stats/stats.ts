import { Component, AfterViewInit, ElementRef, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation';

@Component({
    selector: 'app-stats',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './stats.html',
    styleUrls: ['./stats.css']
})
export class StatsComponent implements AfterViewInit {
    translationService = inject(TranslationService);
    
    @ViewChild('statsGridRef') statsGridRef!: ElementRef;
    private observer: IntersectionObserver | null = null;

    ngAfterViewInit() {
        const options = { threshold: 0.5 };
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.startCounters();
                    this.observer?.unobserve(entry.target);
                }
            });
        }, options);
        this.observer.observe(this.statsGridRef.nativeElement);
    }

    startCounters() {
        const counters = document.querySelectorAll('.counter');
        const speed = 200;
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target')!;
                const count = +counter.textContent!;
                const inc = target / speed;
                if (count < target) {
                    counter.textContent = Math.ceil(count + inc).toString();
                    setTimeout(updateCount, 1);
                } else {
                    counter.textContent = target.toString();
                }
            };
            updateCount();
        });
    }
}