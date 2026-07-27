import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme';
import { TranslationService } from '../../services/translation';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './navbar.html',
    styleUrl: './navbar.css'
})
export class NavbarComponent {
    themeService = inject(ThemeService);
    translationService = inject(TranslationService);
    isScrolled = false;
    isMenuOpen = false;

    @HostListener('window:scroll', [])
    onWindowScroll() {
        this.isScrolled = window.scrollY > 50;
    }

    toggleTheme(event: MouseEvent) {
        this.themeService.toggleTheme(event);
    }

    toggleLanguage() {
        document.body.classList.add('language-switching');

        setTimeout(() => {
            this.translationService.toggleLanguage();
        }, 350);

        setTimeout(() => {
            document.body.classList.remove('language-switching');
        }, 800);
    }

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
        if (this.isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    closeMenu() {
        this.isMenuOpen = false;
        document.body.style.overflow = '';
    }

    getNavItems() {
        return this.translationService.getNavItems();
    }

    getLogoText() {
        return this.translationService.getLogoText();
    }
}