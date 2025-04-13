import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">Full Stack Developer</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/about" routerLinkActive="active">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/projects" routerLinkActive="active">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/skills" routerLinkActive="active">Skills</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/blog" routerLinkActive="active">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/contact" routerLinkActive="active">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      box-shadow: 0 2px 4px rgba(0,0,0,.1);
    }
    .nav-link {
      font-weight: 500;
      padding: 0.5rem 1rem;
      transition: color 0.3s ease;
    }
    .nav-link:hover {
      color: #17a2b8 !important;
    }
    .nav-link.active {
      color: #17a2b8 !important;
    }
  `]
})
export class HeaderComponent {} 