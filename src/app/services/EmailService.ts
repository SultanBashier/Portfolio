import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EmailService {
    // استبدل xxxxxxxx بالـ ID الخاص بك من Formspree
    private apiUrl = 'https://formspree.io/f/mqenwbyb';

    constructor(private http: HttpClient) {}

    sendEmail(formData: any): Observable<any> {
        return this.http.post(this.apiUrl, formData);
    }
}