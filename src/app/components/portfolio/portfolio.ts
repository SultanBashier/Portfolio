import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar';
import { HeroComponent } from '../hero/hero';
import { StatsComponent } from '../stats/stats';
import { ServicesComponent } from '../services/services';
import { SkillsComponent } from '../skills/skills';
import { ProjectCardComponent } from '../project-card/project-card';
import { TimelineComponent } from '../timeline/timeline';
import { ContactComponent } from '../contact/contact';
import { FooterComponent } from '../footer/footer';
import { Project } from '../../models/project.model';
import { TranslationService } from '../../services/translation';

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
        TimelineComponent,
        ContactComponent,
        FooterComponent
    ],
    templateUrl: './portfolio.html',
    styleUrls: ['./portfolio.css']
})
export class PortfolioComponent implements OnInit {
    translationService = inject(TranslationService);
    projects: Project[] = [];

    ngOnInit() {
        this.loadProjects();
    }

    loadProjects() {
        const isEn = this.translationService.currentLang() === 'en';
        
        this.projects = [
            // ==================== المشاريع القديمة ====================
            {
                id: 1,
                title: 'Restaurant Management System',
                titleAr: 'نظام إدارة المطاعم',
                category: 'Back End API',
                categoryAr: 'API متكامل',
                description: 'Clean Architecture, CQRS, MediatR, Redis caching, JWT with role-based access.',
                descriptionAr: 'معمارية نظيفة، CQRS، MediatR، تخزين مؤقت Redis، JWT مع صلاحيات متعددة.',
                icon: 'fa-utensils',
                imageUrl: 'assets/images/projects/resturant.png',
                technologies: ['.NET 8', 'MediatR', 'Redis', 'SQL Server'],
                githubUrl: '#'
            },
            {
                id: 2,
                title: 'Online Book Shop',
                titleAr: 'متجر كتب إلكتروني',
                category: 'E-Commerce Platform',
                categoryAr: 'منصة تجارة إلكترونية',
                description: 'N-Tier architecture, Stripe payment, ASP.NET Identity with OAuth (Google/Microsoft).',
                descriptionAr: 'معمارية متعددة الطبقات، دفع عبر Stripe، هوية ASP.NET مع OAuth.',
                icon: 'fa-book',
                imageUrl: 'assets/images/projects/Bulky.png',
                technologies: ['ASP.NET Core 8', 'Stripe', 'Identity', 'Bootstrap'],
                githubUrl: '#'
            },
           
            
            // ==================== المشاريع الجديدة ====================
            {
                id: 4,
                title: 'E-Commerce Management System',
                titleAr: 'نظام إدارة التجارة الإلكترونية',
                category: 'Full-Stack .NET App',
                categoryAr: 'تطبيق .NET متكامل',
                description: 'Complete e-commerce management system with Admin Dashboard (WinForms), Clean Architecture, and .NET backend. Features include product management, order tracking, user management, and sales reports.',
                descriptionAr: 'نظام إدارة متجر إلكتروني متكامل مع لوحة تحكم للمدير (WinForms)، ومعمارية نظيفة، وباك إند بـ .NET. يشمل إدارة المنتجات، تتبع الطلبات، إدارة المستخدمين، وتقارير المبيعات.',
                icon: 'fa-store',
                imageUrl: 'assets/images/projects/Windosform.png',
                technologies: ['C# .NET', 'WinForms', 'Clean Architecture', 'SQL Server'],
                githubUrl: 'https://github.com/SultanBashier/ECommerceAppProject'
            },
            {
                id: 5,
                title: 'Kemet Store - E-Commerce Platform',
                titleAr: 'كيميت ستور - منصة تجارة إلكترونية',
                category: 'Client-Side Web App',
                categoryAr: 'تطبيق ويب Client-Side',
                description: 'Complete client-side e-commerce web application built with pure HTML, CSS, and JavaScript. Features include product catalog with category filtering, real-time search, shopping cart, wishlist, checkout flow, order history, user authentication, and responsive design.',
                descriptionAr: 'تطبيق ويب تجارة إلكترونية كامل من جانب العميل باستخدام HTML و CSS و JavaScript النقي. يشمل كتالوج منتجات مع تصفية حسب الفئة، بحث فوري، سلة تسوق، قائمة رغبات، عملية دفع، تاريخ الطلبات، توثيق المستخدمين، وتصميم متجاوب.',
                icon: 'fa-landmark',
                imageUrl: 'assets/images/projects/Kemet.png',
                technologies: ['HTML5', 'CSS3', 'JavaScript', 'JSON'],
                githubUrl: 'https://github.com/SultanBashier/Client-Side-Project'
            }
        ];
    }
}