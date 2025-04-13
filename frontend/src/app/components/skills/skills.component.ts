import { Component } from '@angular/core';

interface Skill {
  name: string;
  level: number;
  category: string;
}

@Component({
  selector: 'app-skills',
  template: `
    <section class="skills-section py-5">
      <div class="container">
        <h2 class="text-center mb-5">Technical Skills</h2>
        
        <div class="row">
          <div class="col-md-6 mb-4">
            <h3 class="mb-4">Backend Development</h3>
            <div class="skill-category">
              <div class="skill-item" *ngFor="let skill of backendSkills">
                <div class="d-flex justify-content-between">
                  <span>{{skill.name}}</span>
                  <span>{{skill.level}}%</span>
                </div>
                <div class="progress">
                  <div class="progress-bar" role="progressbar" 
                       [style.width.%]="skill.level" 
                       [attr.aria-valuenow]="skill.level" 
                       aria-valuemin="0" 
                       aria-valuemax="100">
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6 mb-4">
            <h3 class="mb-4">Frontend Development</h3>
            <div class="skill-category">
              <div class="skill-item" *ngFor="let skill of frontendSkills">
                <div class="d-flex justify-content-between">
                  <span>{{skill.name}}</span>
                  <span>{{skill.level}}%</span>
                </div>
                <div class="progress">
                  <div class="progress-bar" role="progressbar" 
                       [style.width.%]="skill.level" 
                       [attr.aria-valuenow]="skill.level" 
                       aria-valuemin="0" 
                       aria-valuemax="100">
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6 mb-4">
            <h3 class="mb-4">Databases</h3>
            <div class="skill-category">
              <div class="skill-item" *ngFor="let skill of databaseSkills">
                <div class="d-flex justify-content-between">
                  <span>{{skill.name}}</span>
                  <span>{{skill.level}}%</span>
                </div>
                <div class="progress">
                  <div class="progress-bar" role="progressbar" 
                       [style.width.%]="skill.level" 
                       [attr.aria-valuenow]="skill.level" 
                       aria-valuemin="0" 
                       aria-valuemax="100">
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6 mb-4">
            <h3 class="mb-4">Tools & Technologies</h3>
            <div class="skill-category">
              <div class="skill-item" *ngFor="let skill of toolSkills">
                <div class="d-flex justify-content-between">
                  <span>{{skill.name}}</span>
                  <span>{{skill.level}}%</span>
                </div>
                <div class="progress">
                  <div class="progress-bar" role="progressbar" 
                       [style.width.%]="skill.level" 
                       [attr.aria-valuenow]="skill.level" 
                       aria-valuemin="0" 
                       aria-valuemax="100">
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
    .skills-section {
      background-color: #f8f9fa;
    }
    .skill-category {
      margin-bottom: 2rem;
    }
    .skill-item {
      margin-bottom: 1.5rem;
    }
    .progress {
      height: 0.5rem;
      background-color: #e9ecef;
      margin-top: 0.5rem;
    }
    .progress-bar {
      background-color: #2a5298;
      transition: width 1s ease-in-out;
    }
    h3 {
      color: #2a5298;
      font-size: 1.5rem;
    }
  `]
})
export class SkillsComponent {
  backendSkills: Skill[] = [
    { name: 'C# / .NET Core', level: 95, category: 'backend' },
    { name: 'Node.js', level: 90, category: 'backend' },
    { name: 'RESTful APIs', level: 95, category: 'backend' },
    { name: 'Microservices', level: 85, category: 'backend' }
  ];

  frontendSkills: Skill[] = [
    { name: 'Angular', level: 90, category: 'frontend' },
    { name: 'TypeScript', level: 85, category: 'frontend' },
    { name: 'HTML5/CSS3', level: 95, category: 'frontend' },
    { name: 'Bootstrap', level: 90, category: 'frontend' }
  ];

  databaseSkills: Skill[] = [
    { name: 'SQL Server', level: 90, category: 'database' },
    { name: 'Firebase', level: 85, category: 'database' },
    { name: 'Entity Framework', level: 90, category: 'database' },
    { name: 'MongoDB', level: 80, category: 'database' }
  ];

  toolSkills: Skill[] = [
    { name: 'Git', level: 95, category: 'tools' },
    { name: 'Docker', level: 85, category: 'tools' },
    { name: 'Azure DevOps', level: 90, category: 'tools' },
    { name: 'VS Code', level: 95, category: 'tools' }
  ];
} 