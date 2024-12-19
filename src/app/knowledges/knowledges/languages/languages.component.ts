import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
  
  languages: any[] = []; // Lista de idiomas con datos estáticos quemados
  
  constructor() {}

  ngOnInit(): void {
    this.loadLanguages();
  }

  loadLanguages(): void {
    // Datos quemados (mock)
    this.languages = [
      {
        name: 'English',
        level: 'Advanced',
        proficiency: '80%' // Proporción para la barra de progreso
      },
      {
        name: 'Spanish',
        level: 'Native',
        proficiency: '100%' // Proporción para la barra de progreso
      }
    ];
  }
}