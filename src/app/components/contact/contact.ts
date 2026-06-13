import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../../services/translation';
import { EmailService } from '../../services/EmailService';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './contact.html',
    styleUrls: ['./contact.css']
})
export class ContactComponent {
    translationService = inject(TranslationService);
    emailService = inject(EmailService);
    
    formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
    };
    
    isLoading = false;
    successMessage = '';
    errorMessage = '';

    onSubmit() {
        this.isLoading = true;
        this.successMessage = '';
        this.errorMessage = '';
        
        this.emailService.sendEmail(this.formData).subscribe({
            next: () => {
                this.isLoading = false;
                this.successMessage = this.translationService.currentLang() === 'en'
                    ? '✅ Message sent successfully! I will contact you soon.'
                    : '✅ تم إرسال الرسالة بنجاح! سأتصل بك قريباً.';
                this.formData = { name: '', email: '', subject: '', message: '' };
                setTimeout(() => this.successMessage = '', 5000);
            },
            error: () => {
                this.isLoading = false;
                this.errorMessage = this.translationService.currentLang() === 'en'
                    ? '❌ Failed to send message. Please try again later.'
                    : '❌ فشل إرسال الرسالة. يرجى المحاولة مرة أخرى لاحقاً.';
                setTimeout(() => this.errorMessage = '', 5000);
            }
        });
    }
}