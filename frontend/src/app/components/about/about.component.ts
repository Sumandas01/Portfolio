import { Component } from '@angular/core';

interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
}

@Component({
  selector: 'app-about',
  template: `
    <section class="about-section py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 mb-4 mb-lg-0">
            <div class="card">
              <div class="card-body text-center">
                <img src="assets/images/profile.jpg" alt="Profile" class="rounded-circle mb-3" style="width: 200px; height: 200px; object-fit: cover;">
                <h3 class="card-title">John Doe</h3>
                <p class="text-muted">Full Stack Developer</p>
                <div class="social-links mb-3">
                  <a href="https://github.com/yourusername" target="_blank" class="text-dark me-2">
                    <i class="fab fa-github fa-lg"></i>
                  </a>
                  <a href="https://linkedin.com/in/yourusername" target="_blank" class="text-dark me-2">
                    <i class="fab fa-linkedin fa-lg"></i>
                  </a>
                  <a href="https://twitter.com/yourusername" target="_blank" class="text-dark">
                    <i class="fab fa-twitter fa-lg"></i>
                  </a>
                </div>
                <a href="assets/resume.pdf" class="btn btn-primary" download>Download Resume</a>
              </div>
            </div>
          </div>

          <div class="col-lg-8">
            <div class="card mb-4">
              <div class="card-body">
                <h4 class="card-title mb-4">About Me</h4>
                <p class="card-text">
                  I am a passionate Full Stack Developer with over 5 years of experience in building web applications.
                  My expertise lies in developing scalable solutions using .NET Core, Node.js, and Angular.
                  I am constantly learning new technologies and best practices to deliver high-quality software solutions.
                </p>
                <p class="card-text">
                  When I'm not coding, I enjoy contributing to open-source projects, writing technical blogs,
                  and mentoring junior developers. I believe in clean code, best practices, and continuous learning.
                </p>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <h4 class="card-title mb-4">Professional Experience</h4>
                <div class="timeline">
                  <div class="timeline-item" *ngFor="let exp of experiences">
                    <h5 class="mb-1">{{exp.position}}</h5>
                    <h6 class="text-muted mb-2">{{exp.company}} | {{exp.period}}</h6>
                    <p class="mb-2">{{exp.description}}</p>
                    <div class="technologies">
                      <span class="badge bg-primary me-2" *ngFor="let tech of exp.technologies">
                        {{tech}}
                      </span>
                    </div>
                    <hr class="my-3">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-section {
      background-color: #f8f9fa;
    }
    .card {
      border: none;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .social-links a {
      transition: transform 0.3s ease;
    }
    .social-links a:hover {
      transform: translateY(-3px);
    }
    .timeline-item:last-child hr {
      display: none;
    }
    .badge {
      font-size: 0.8rem;
      padding: 0.5rem 1rem;
    }
  `]
})
export class AboutComponent {
  experiences: Experience[] = [
    {
      company: 'Tech Solutions Inc.',
      position: 'Senior Full Stack Developer',
      period: '2021 - Present',
      description: 'Leading the development of enterprise-level applications using .NET Core and Angular. Implementing microservices architecture and CI/CD pipelines.',
      technologies: ['.NET Core', 'Angular', 'SQL Server', 'Azure']
    },
    {
      company: 'Digital Innovations',
      position: 'Full Stack Developer',
      period: '2019 - 2021',
      description: 'Developed and maintained multiple web applications using Node.js and React. Implemented real-time features using Socket.io.',
      technologies: ['Node.js', 'React', 'MongoDB', 'Socket.io']
    },
    {
      company: 'WebTech Solutions',
      position: 'Junior Developer',
      period: '2017 - 2019',
      description: 'Worked on various web projects using .NET and JavaScript frameworks. Collaborated with team members using Agile methodologies.',
      technologies: ['.NET', 'JavaScript', 'jQuery', 'SQL Server']
    }
  ];
} 