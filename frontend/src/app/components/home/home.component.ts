import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero-section text-center py-5">
      <div class="container">
        <h1 class="display-4 mb-4">Carpediem</h1>
        <p class="lead mb-4">Specializing in .NET, Node.js, Angular, and Cloud Technologies</p>
        <div class="cta-buttons">
          <a routerLink="/projects" class="btn btn-primary btn-lg me-3">View Projects</a>
          <a routerLink="/contact" class="btn btn-outline-primary btn-lg">Contact Me</a>
        </div>
      </div>
    </section>

    <section class="featured-section py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="card h-100">
              <div class="card-body">
                <h3 class="card-title">Backend Development</h3>
                <p class="card-text">Expert in .NET Core and Node.js with strong database skills in SQL Server and Firebase.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card h-100">
              <div class="card-body">
                <h3 class="card-title">Frontend Development</h3>
                <p class="card-text">Proficient in Angular, TypeScript, and modern UI/UX practices.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card h-100">
              <div class="card-body">
                <h3 class="card-title">Cloud & DevOps</h3>
                <p class="card-text">Experience with cloud platforms and CI/CD pipelines.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero-section {
      background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
      color: white;
      padding: 100px 0;
    }
    .hero-section h1 {
      font-weight: 700;
      margin-bottom: 1.5rem;
    }
    .hero-section .lead {
      font-size: 1.25rem;
      margin-bottom: 2rem;
    }
    .cta-buttons {
      margin-top: 2rem;
    }
    .featured-section {
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
    .card-title {
      color: #2a5298;
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  `]
})
export class HomeComponent {} 