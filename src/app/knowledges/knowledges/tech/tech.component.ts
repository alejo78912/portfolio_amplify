import { Component, OnInit } from '@angular/core';
import { TechService } from './services/tech.service'; // Asegúrate de importar el servicio

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

  technologies: any[] = []; // Lista de tecnologías

  constructor(private techService: TechService) { }

  ngOnInit(): void {
    this.loadTechnologies();
  }

  // Método para cargar tecnologías desde el servicio
  loadTechnologies(): void {
    // Datos de prueba hasta que el servicio esté listo
    this.technologies = [
      { name: 'Angular', description: 'A powerful JavaScript framework.', image: 'assets/images/angular.png' },
      { name: 'Java', description: 'A robust and popular programming language.', image: 'assets/images/java.png' },
      { name: 'Python', description: 'A versatile programming language.', image: 'assets/images/python.png' },
      { name: 'Docker', description: 'Containerization platform.', image: 'assets/images/docker.png' },
      { name: 'Spring Boot', description: 'Java-based backend framework.', image: 'assets/images/springboot.png' },
      { name: 'Laravel', description: 'PHP framework for web applications.', image: 'assets/images/laravel.png' },
      { name: 'Kubernetes', description: 'Orchestration for containerized applications.', image: 'assets/images/kubernetes.png' },
      { name: 'OpenCV', description: 'Computer vision library.', image: 'assets/images/opencv.png' },
      { name: 'NodeJS', description: 'JavaScript runtime for backend.', image: 'assets/images/nodejs.png' },
      { name: 'TypeScript', description: 'Typed superset of JavaScript.', image: 'assets/images/typescript.png' },
      { name: 'Git', description: 'Version control system.', image: 'assets/images/git.png' },
      { name: 'HTML', description: 'Markup language for the web.', image: 'assets/images/html.png' },
      { name: 'CSS', description: 'Stylesheet language for web design.', image: 'assets/images/css.png' },
      { name: 'Bootstrap', description: 'CSS framework for responsive design.', image: 'assets/images/bootstrap.png' },
      { name: 'JavaScript', description: 'Programming language for the web.', image: 'assets/images/javascript.png' },
      { name: 'PostgreSQL', description: 'Relational database system.', image: 'assets/images/postgresql.png' },
      { name: 'MySQL', description: 'Popular relational database.', image: 'assets/images/mysql.png' },
      { name: 'MongoDB', description: 'NoSQL database for modern apps.', image: 'assets/images/mongodb.png' },
      { name: 'FastAPI', description: 'Python framework for APIs.', image: 'assets/images/fastapi.png' },
      { name: 'Terraform', description: 'Infrastructure as code tool.', image: 'assets/images/terraform.png' }
    ];
  }
}
