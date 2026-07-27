import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation';

@Component({
    selector: 'app-experience',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './experience.html',
    styleUrls: ['./experience.css']
})
export class ExperienceComponent {
    translationService = inject(TranslationService);

    getExperiences() {
        const isEn = this.translationService.currentLang() === 'en';
        return [
            {
                title: isEn ? 'Freelance Full Stack .NET Developer' : 'مطور دوت نت وأنغولار متكامل (حر)',
                client: isEn ? 'Private Client (Saudi Arabia)' : 'عميل خاص (المملكة العربية السعودية)',
                location: isEn ? 'Remote' : 'عن بعد',
                date: isEn ? 'April 2026' : 'أبريل 2026',
                icon: 'fa-laptop-code',
                bullets: isEn ? [
                    'Built a full-stack inventory management system for a food distribution business operating multiple warehouse locations.',
                    'Developed the backend using ASP.NET Core Web API and SQL Server.',
                    'Built a responsive Angular web application for inventory tracking, warehouse management, stock movement, and reporting.',
                    'Worked directly with the client to gather requirements and deliver features matching business needs.'
                ] : [
                    'بناء نظام متكامل لإدارة المخزون لشركة توزيع مواد غذائية تعمل في مواقع مستودعات متعددة.',
                    'تطوير الخلفية البرمجية (Backend) باستخدام ASP.NET Core Web API و SQL Server.',
                    'بناء تطبيق ويب متجاوب باستخدام Angular لتتبع المخزون، إدارة المستودعات، حركة المخازن، والتقارير.',
                    'العمل مباشرة مع العميل لجمع المتطلبات وتقديم الميزات المتوافقة مع احتياجات العمل.'
                ]
            },
            {
                title: isEn ? 'Freelance Automation Developer (n8n)' : 'مطور أتمتة عمليات (n8n) حر',
                client: isEn ? 'Private Client (Oman)' : 'عميل خاص (سلطنة عمان)',
                location: isEn ? 'Remote' : 'عن بعد',
                date: isEn ? 'May 2026' : 'مايو 2026',
                icon: 'fa-robot',
                bullets: isEn ? [
                    'Built AI-powered automation workflows using n8n.',
                    'Integrated WhatsApp Cloud API and multiple third-party services.',
                    'Deployed and maintained workflows on cloud servers.',
                    'Customized chatbot behavior and automated business processes according to client requirements.'
                ] : [
                    'بناء سير عمل أتمتة مدعوم بالذكاء الاصطناعي باستخدام n8n.',
                    'دمج واجهة برمجة تطبيقات WhatsApp Cloud API والعديد من الخدمات الخارجية.',
                    'نشر وصيانة مهام الأتمتة على خوادم سحابية.',
                    'تخصيص سلوك روبوتات الدردشة التفاعلية (Chatbots) وأتمتة العمليات التجارية وفقًا لمتطلبات العميل.'
                ]
            }
        ];
    }
}
