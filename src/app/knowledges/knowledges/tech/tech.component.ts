import { Component, OnInit } from '@angular/core';
import { TechService } from './services/tech.service'; // Asegúrate de importar el servicio

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

  technologies: any[] = [];

  constructor(private techService: TechService) { }

  ngOnInit(): void {
    this.loadTechnologies();
  }

  loadTechnologies(): void {
  
    this.techService.getTechnologies().subscribe(
      (data) => {
        this.technologies = data; 
      },
      (error) => {
        console.error('Error fetching technologies:', error);
      }
    );
  }
}
