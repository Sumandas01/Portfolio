import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer py-4">
      <div class="container">
        <div class="row">
          <div class="col-md-4 mb-4 mb-md-0">
            <h5 class="text-white mb-3">About Me</h5>
            <p class="text-light">Full Stack Developer specializing in .NET, Node.js, and Angular development.</p>
          </div>
          
          <div class="col-md-4 mb-4 mb-md-0">
            <h5 class="text-white mb-3">Quick Links</h5>
            <ul class="list-unstyled">
              <li><a routerLink="/" class="text-light">Home</a></li>
              <li><a routerLink="/about" class="text-light">About</a></li>
              <li><a routerLink="/projects" class="text-light">Projects</a></li>
              <li><a routerLink="/contact" class="text-light">Contact</a></li>
            </ul>
          </div>
          
          <div class="col-md-4">
            <h5 class="text-white mb-3">Connect</h5>
            <div class="social-links">
              <a href="https://github.com/yourusername" target="_blank" class="text-light me-3">
                <i class="fab fa-github fa-lg"></i>
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" class="text-light me-3">
                <i class="fab fa-linkedin fa-lg"></i>
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" class="text-light me-3">
                <i class="fab fa-twitter fa-lg"></i>
              </a>
              <a href="mailto:your.email@example.com" class="text-light">
                <i class="fas fa-envelope fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
        
        <hr class="my-4 bg-light">
        
        <div class="row">
          <div class="col-md-6 text-center text-md-start">
            <p class="text-light mb-0">&copy; 2024 Full Stack Developer. All rights reserved.</p>
          </div>
          <div class="col-md-6 text-center text-md-end">
            <p class="text-light mb-0">Made with <i class="fas fa-heart text-danger"></i> using Angular</p>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background-color: #1e3c72;
      color: white;
    }
    .footer a {
      text-decoration: none;
      transition: color 0.3s ease;
    }
    .footer a:hover {
      color: #17a2b8 !important;
    }
    .social-links a {
      display: inline-block;
      transition: transform 0.3s ease;
    }
    .social-links a:hover {
      transform: translateY(-3px);
    }
    hr {
      opacity: 0.2;
    }
  `]
})
export class FooterComponent {} 