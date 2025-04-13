import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
}

@Component({
  selector: 'app-projects',
  template: `
    <section class="projects-section py-5">
      <div class="container">
        <h2 class="text-center mb-5">Featured Projects</h2>
        
        <div class="row">
          <div class="col-md-6 col-lg-4 mb-4" *ngFor="let project of projects">
            <div class="card h-100">
              <img [src]="project.imageUrl" class="card-img-top" [alt]="project.title">
              <div class="card-body">
                <h3 class="card-title">{{project.title}}</h3>
                <p class="card-text">{{project.description}}</p>
                <div class="technologies mb-3">
                  <span class="badge bg-primary me-2" *ngFor="let tech of project.technologies">
                    {{tech}}
                  </span>
                </div>
                <div class="project-links">
                  <a [href]="project.githubUrl" class="btn btn-outline-dark me-2" target="_blank" *ngIf="project.githubUrl">
                    <i class="fab fa-github"></i> GitHub
                  </a>
                  <a [href]="project.liveUrl" class="btn btn-primary" target="_blank" *ngIf="project.liveUrl">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .projects-section {
      background-color: #f8f9fa;
    }
    .card {
      transition: transform 0.3s ease;
      border: none;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .card:hover {
      transform: translateY(-5px);
    }
    .card-img-top {
      height: 200px;
      object-fit: cover;
    }
    .card-title {
      color: #2a5298;
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    .technologies .badge {
      font-size: 0.8rem;
      padding: 0.5rem 1rem;
    }
    .project-links {
      margin-top: 1rem;
    }
  `]
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with real-time inventory management and payment processing.',
      technologies: ['Angular', '.NET Core', 'SQL Server', 'Firebase'],
      imageUrl: 'assets/images/ecommerce.jpg',
      githubUrl: 'https://github.com/yourusername/ecommerce',
      liveUrl: 'https://ecommerce-demo.com'
    },
    {
      title: 'Task Management System',
      description: 'A collaborative task management system with real-time updates and team features.',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Socket.io'],
      imageUrl: 'assets/images/taskmanager.jpg',
      githubUrl: 'https://github.com/yourusername/taskmanager'
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing projects and skills.',
      technologies: ['Angular', 'TypeScript', 'Bootstrap', 'Firebase'],
      imageUrl: 'assets/images/portfolio.jpg',
      githubUrl: 'https://github.com/yourusername/portfolio'
    },
    {
      title: 'Blog Platform',
      description: 'A full-featured blog platform with content management and user authentication.',
      technologies: ['.NET Core', 'Angular', 'SQL Server', 'Azure'],
      imageUrl: 'assets/images/blog.jpg',
      liveUrl: 'https://blog-demo.com'
    },
    {
      title: 'Real-time Chat Application',
      description: 'A real-time chat application with file sharing and group chat features.',
      technologies: ['Angular', 'Node.js', 'Socket.io', 'MongoDB'],
      imageUrl: 'assets/images/chat.jpg',
      githubUrl: 'https://github.com/yourusername/chat-app'
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather dashboard with real-time updates and location-based forecasts.',
      technologies: ['Angular', 'Node.js', 'OpenWeather API', 'Chart.js'],
      imageUrl: 'assets/images/weather.jpg',
      liveUrl: 'https://weather-demo.com'
    }
  ];
} 