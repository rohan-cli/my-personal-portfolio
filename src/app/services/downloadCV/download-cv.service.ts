import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DownloadCvService {
  constructor(private http: HttpClient) { }

  downloadCV(): void {
    const cvUrl = 'cv/Resume_RohanMishra2025.pdf';

    this.http.get(cvUrl, {
      responseType: 'blob',
      observe: 'response'
    }).subscribe({
      next: (response) => {
        const blob = response.body;
        if (blob) {
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = 'Resume_RohanMishra2025.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
        }
      },
      error: (error) => {
        console.error('Error downloading CV:', error);
      }
    });
  }
}
