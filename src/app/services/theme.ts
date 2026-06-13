import { Injectable, signal, effect } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    isDarkMode = signal<boolean>(true);

    constructor() {
        // تحقق من التيمة المخزنة
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            this.isDarkMode.set(false);
            document.body.classList.add('light-mode');
        }
        
        // مراقبة التغييرات
        effect(() => {
            if (this.isDarkMode()) {
                document.body.classList.remove('light-mode');
                localStorage.setItem('theme', 'dark');
            } else {
                document.body.classList.add('light-mode');
                localStorage.setItem('theme', 'light');
            }
        });
    }

    toggleTheme() {
        this.isDarkMode.update(value => !value);
    }
}