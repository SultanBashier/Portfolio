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
                date: isEn ? 'March 2026' : 'مارس 2026',
                icon: 'fa-laptop-code',
                description: isEn 
                    ? 'Auto Spare Parts Stores & Warehouse Management System' 
                    : 'نظام إدارة محلات ومستودعات قطع غيار السيارات',
                bullets: isEn ? [
                    'Developed RESTful APIs to manage spare parts, products, categories, suppliers, customers, warehouses, and inventory.',
                    'Built an Angular dashboard for managing purchases, sales, stock transfers, and inventory across multiple warehouses.',
                    'Implemented authentication and role-based authorization for administrators and employees.',
                    'Designed and optimized the SQL Server database using Entity Framework Core.',
                    'Collaborated directly with the client to implement business requirements, fix issues, and deliver production-ready features.'
                ] : [
                    'تطوير واجهات برمجة التطبيقات (RESTful APIs) لإدارة قطع الغيار، المنتجات، التصنيفات، الموردين، العملاء، المستودعات، والمخزون.',
                    'بناء لوحة تحكم باستخدام Angular لإدارة المشتريات، المبيعات، تحويلات المخزون، والمخازن عبر مستودعات متعددة.',
                    'تنفيذ المصادقة والترخيص القائم على الأدوار للمسؤولين والموظفين.',
                    'تصميم وتحسين قاعدة بيانات SQL Server باستخدام Entity Framework Core.',
                    'التعاون مباشرة مع العميل لتنفيذ متطلبات العمل، إصلاح المشكلات، وتقديم ميزات جاهزة للإنتاج.'
                ],
                technologies: ['ASP.NET Core', 'Angular', 'SQL Server', 'Entity Framework Core', 'JWT', 'Git']
            },
            {
                title: isEn ? 'Freelance Automation Developer (n8n)' : 'مطور أتمتة عمليات (n8n) حر',
                client: isEn ? 'Private Client (Oman)' : 'عميل خاص (سلطنة عمان)',
                location: isEn ? 'Remote' : 'عن بعد',
                date: isEn ? 'May 2026' : 'مايو 2026',
                icon: 'fa-robot',
                description: isEn 
                    ? 'AI Restaurant Chatbot' 
                    : 'روبوت محادثة مدعوم بالذكاء الاصطناعي للمطاعم',
                bullets: isEn ? [
                    'Built an AI-powered restaurant chatbot using n8n to automate customer interactions.',
                    'Integrated WhatsApp Cloud API to handle reservations, menu inquiries, and customer support.',
                    'Connected multiple third-party services using REST APIs and Webhooks.',
                    'Designed automation workflows for order handling, notifications, and customer communication.',
                    'Customized the chatbot behavior based on the restaurant\'s business requirements and deployed the workflows to the cloud.'
                ] : [
                    'بناء روبوت محادثة للمطاعم مدعوم بالذكاء الاصطناعي باستخدام n8n لأتمتة تفاعلات العملاء.',
                    'دمج WhatsApp Cloud API للتعامل مع الحجوزات، استفسارات قائمة الطعام، ودعم العملاء.',
                    'ربط خدمات خارجية متعددة باستخدام REST APIs و Webhooks.',
                    'تصميم سير عمل الأتمتة لمعالجة الطلبات، الإشعارات، وتواصل العملاء.',
                    'تخصيص سلوك روبوت المحادثة بناءً على متطلبات عمل المطعم ونشر مسارات العمل على السحابة.'
                ],
                technologies: ['n8n', 'WhatsApp Cloud API', 'REST APIs', 'Webhooks']
            }
        ];
    }
}
