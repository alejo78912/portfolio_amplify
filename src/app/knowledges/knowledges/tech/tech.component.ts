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
      { name: 'Angular', description: 'A powerful JavaScript framework.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png' },
      { name: 'Java', description: 'A robust and popular programming language.', image: 'https://cdn.freebiesupply.com/logos/large/2x/java-4-logo-png-transparent.png' },
      { name: 'Python', description: 'A versatile programming language.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png' },
      { name: 'Docker', description: 'Containerization platform.', image: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png' },
      { name: 'Spring Boot', description: 'Java-based backend framework.', image: 'https://dominickm.com/wp-content/uploads/2016/06/spring-boot-logo_full.png' },
      { name: 'Laravel', description: 'PHP framework for web applications.', image: 'https://static-00.iconduck.com/assets.00/laravel-icon-497x512-uwybstke.png' },
      { name: 'Kubernetes', description: 'Orchestration for containerized applications.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/2109px-Kubernetes_logo_without_workmark.svg.png' },
      { name: 'OpenCV', description: 'Computer vision library.', image: 'https://static-00.iconduck.com/assets.00/opencv-icon-1657x2048-3wu3ib6x.png' },
      { name: 'NodeJS', description: 'JavaScript runtime for backend.', image: 'https://cdn.freebiesupply.com/logos/large/2x/nodejs-1-logo-png-transparent.png' },
      { name: 'TypeScript', description: 'Typed superset of JavaScript.', image: 'https://img.icons8.com/ios7/600/typescript.png' },
      { name: 'Git', description: 'Version control system.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png' },
      { name: 'HTML', description: 'Markup language for the web.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png' },
      { name: 'CSS', description: 'Stylesheet language for web design.', image: 'https://cdn1.iconfinder.com/data/icons/social-media-logos-7/64/css-3-512.png' },
      { name: 'Bootstrap', description: 'CSS framework for responsive design.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png' },
      { name: 'JavaScript', description: 'Programming language for the web.', image: 'https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png' },
      { name: 'PostgreSQL', description: 'Relational database system.', image: 'https://download.logo.wine/logo/PostgreSQL/PostgreSQL-Logo.wine.png' },
      { name: 'MySQL', description: 'Popular relational database.', image: 'https://1000marcas.net/wp-content/uploads/2020/11/MySQL-logo.png' },
      { name: 'MongoDB', description: 'NoSQL database for modern apps.', image: 'https://1000marcas.net/wp-content/uploads/2021/06/MongoDB-Logo.png' },
      { name: 'FastAPI', description: 'Python framework for APIs.', image: 'https://media.licdn.com/dms/image/v2/C4D12AQEfnB5eUECypQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1609606275382?e=2147483647&v=beta&t=FUZMIgA7PDvGe1FmMojni4TeZdagkzdzVK4DyJCTdfY' },
      { name: 'Terraform', description: 'Infrastructure as code tool.', image: 'https://static-00.iconduck.com/assets.00/terraform-icon-1803x2048-hodrzd3t.png' }
    ];
  }
}
