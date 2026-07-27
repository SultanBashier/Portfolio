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

    toggleTheme(event?: MouseEvent) {
        if (typeof document !== 'undefined' && 'startViewTransition' in document) {
            let x = window.innerWidth / 2;
            let y = window.innerHeight / 2;

            if (event) {
                const target = event.currentTarget as HTMLElement;
                if (target && typeof target.getBoundingClientRect === 'function') {
                    const rect = target.getBoundingClientRect();
                    x = rect.left + rect.width / 2;
                    y = rect.top + rect.height / 2;
                } else {
                    x = event.clientX;
                    y = event.clientY;
                }
            }

            const endRadius = Math.hypot(
                Math.max(x, window.innerWidth - x),
                Math.max(y, window.innerHeight - y)
            );

            const transition = (document as any).startViewTransition(() => {
                this.isDarkMode.update(value => !value);
            });

            transition.ready.then(() => {
                const clipPath = [
                    `circle(0px at ${x}px ${y}px)`,
                    `circle(${endRadius}px at ${x}px ${y}px)`
                ];
                document.documentElement.animate(
                    {
                        clipPath: clipPath
                    },
                    {
                        duration: 500,
                        easing: 'ease-in-out',
                        pseudoElement: '::view-transition-new(root)'
                    }
                );
            });
        } else {
            this.isDarkMode.update(value => !value);
        }
    }
}