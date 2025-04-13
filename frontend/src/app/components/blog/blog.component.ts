import { Component } from '@angular/core';

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
  readTime: string;
  tags: string[];
}

@Component({
  selector: 'app-blog',
  template: `
    <section class="blog-section py-5">
      <div class="container">
        <h2 class="text-center mb-5">Technical Blog</h2>
        
        <div class="row">
          <div class="col-md-8">
            <div class="blog-posts">
              <article class="card mb-4" *ngFor="let post of blogPosts">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img [src]="post.imageUrl" class="img-fluid rounded-start h-100" 
                         [alt]="post.title" style="object-fit: cover;">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <div class="d-flex justify-content-between align-items-center mb-2">
                        <span class="badge bg-primary">{{post.category}}</span>
                        <small class="text-muted">{{post.date}} · {{post.readTime}} read</small>
                      </div>
                      <h3 class="card-title h4">{{post.title}}</h3>
                      <p class="card-text">{{post.excerpt}}</p>
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="tags">
                          <span class="badge bg-light text-dark me-2" *ngFor="let tag of post.tags">
                            {{tag}}
                          </span>
                        </div>
                        <a href="#" class="btn btn-outline-primary">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card mb-4">
              <div class="card-body">
                <h4 class="card-title">Categories</h4>
                <ul class="list-unstyled">
                  <li class="mb-2">
                    <a href="#" class="text-decoration-none d-flex justify-content-between align-items-center">
                      <span>.NET Development</span>
                      <span class="badge bg-primary rounded-pill">14</span>
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#" class="text-decoration-none d-flex justify-content-between align-items-center">
                      <span>Angular</span>
                      <span class="badge bg-primary rounded-pill">8</span>
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#" class="text-decoration-none d-flex justify-content-between align-items-center">
                      <span>Node.js</span>
                      <span class="badge bg-primary rounded-pill">6</span>
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#" class="text-decoration-none d-flex justify-content-between align-items-center">
                      <span>Database</span>
                      <span class="badge bg-primary rounded-pill">4</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Popular Tags</h4>
                <div class="tags">
                  <a href="#" class="badge bg-light text-dark text-decoration-none me-2 mb-2">C#</a>
                  <a href="#" class="badge bg-light text-dark text-decoration-none me-2 mb-2">TypeScript</a>
                  <a href="#" class="badge bg-light text-dark text-decoration-none me-2 mb-2">SQL Server</a>
                  <a href="#" class="badge bg-light text-dark text-decoration-none me-2 mb-2">Firebase</a>
                  <a href="#" class="badge bg-light text-dark text-decoration-none me-2 mb-2">REST API</a>
                  <a href="#" class="badge bg-light text-dark text-decoration-none me-2 mb-2">Microservices</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .blog-section {
      background-color: #f8f9fa;
    }
    .card {
      border: none;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .card-title {
      color: #2a5298;
    }
    .badge {
      font-weight: 500;
    }
    .tags .badge {
      font-size: 0.8rem;
      padding: 0.5rem 1rem;
    }
    a:hover {
      color: #2a5298 !important;
    }
  `]
})
export class BlogComponent {
  blogPosts: BlogPost[] = [
    {
      title: 'Building Scalable Microservices with .NET Core',
      excerpt: 'Learn how to design and implement scalable microservices using .NET Core and Docker.',
      date: 'March 15, 2024',
      category: '.NET Development',
      imageUrl: 'assets/images/blog/microservices.jpg',
      readTime: '8 min',
      tags: ['.NET Core', 'Microservices', 'Docker']
    },
    {
      title: 'Angular Best Practices for 2024',
      excerpt: 'Discover the latest best practices and patterns for building modern Angular applications.',
      date: 'March 10, 2024',
      category: 'Angular',
      imageUrl: 'assets/images/blog/angular.jpg',
      readTime: '6 min',
      tags: ['Angular', 'TypeScript', 'Best Practices']
    },
    {
      title: 'Real-time Applications with Node.js and Socket.io',
      excerpt: 'Create real-time features in your web applications using Node.js and Socket.io.',
      date: 'March 5, 2024',
      category: 'Node.js',
      imageUrl: 'assets/images/blog/nodejs.jpg',
      readTime: '7 min',
      tags: ['Node.js', 'Socket.io', 'Real-time']
    }
  ];
} 