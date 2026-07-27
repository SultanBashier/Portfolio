import { Injectable, signal } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TranslationService {
    currentLang = signal<'en' | 'ar'>('en');
    languageChanged = new Subject<'en' | 'ar'>();

    constructor() {
        const savedLang = localStorage.getItem('language') as 'en' | 'ar';
        if (savedLang && (savedLang === 'en' || savedLang === 'ar')) {
            this.currentLang.set(savedLang);
            this.applyLanguageSettings(savedLang);
        }
    }

    toggleLanguage() {
        const newLang = this.currentLang() === 'en' ? 'ar' : 'en';
        this.currentLang.set(newLang);
        localStorage.setItem('language', newLang);
        this.applyLanguageSettings(newLang);
        this.languageChanged.next(newLang);
    }

    private applyLanguageSettings(lang: 'en' | 'ar') {
        document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        document.documentElement.setAttribute('lang', lang);
        
        if (lang === 'ar') {
            document.body.classList.add('arabic-mode');
        } else {
            document.body.classList.remove('arabic-mode');
        }
    }

    getCurrentLang() {
        return this.currentLang();
    }

    isRTL() {
        return this.currentLang() === 'ar';
    }
    
    // Translations for navbar
    getNavItems() {
        return {
            home: this.currentLang() === 'en' ? 'Home' : 'الرئيسية',
            services: this.currentLang() === 'en' ? 'Services' : 'الخدمات',
            skills: this.currentLang() === 'en' ? 'Skills' : 'المهارات',
            portfolio: this.currentLang() === 'en' ? 'Portfolio' : 'أعمالي',
            experience: this.currentLang() === 'en' ? 'Experience' : 'الخبرة',
            journey: this.currentLang() === 'en' ? 'Journey' : 'رحلتي',
            contact: this.currentLang() === 'en' ? 'Contact' : 'تواصل معي'
        };
    }
    
    getLogoText() {
        return this.currentLang() === 'en' ? 'Sultan.Bashier' : 'سلطان.بشير';
    }
}