import { Component } from '@angular/core';
import { LanguagesService } from './services/languages.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent {
  
  languages: any[] = [];
  


  constructor(private languagesService: LanguagesService) { }

  ngOnInit(): void {
    this.loadLanguages();
  }

  loadLanguages(): void {
  
    this.languagesService.getLanguages().subscribe(
      (data) => {
        this.languages = data; 
      },
      (error) => {
        console.error('Error fetching languages:', error);
      }
    );
  }
}
