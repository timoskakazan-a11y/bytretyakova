import { Component, ChangeDetectionStrategy, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from './models/portfolio.model';
import { PortfolioService } from './services/portfolio.service';
import { HeaderComponent } from './components/header/header.component';
import { ProjectModalComponent } from './components/project-modal/project-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ProjectModalComponent],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private portfolioService = inject(PortfolioService);
  
  designer = this.portfolioService.designerProfile;
  projects = this.portfolioService.projects;

  selectedProject = signal<Project | null>(null);
  isModalOpen = signal(false);

  currentYear = new Date().getFullYear();

  telLink = computed(() => {
    const phone = this.designer().phone;
    return `tel:${phone.replace(/[^0-9+]/g, '')}`;
  });

  openProjectModal(project: Project): void {
    this.selectedProject.set(project);
    this.isModalOpen.set(true);
  }

  closeProjectModal(): void {
    this.isModalOpen.set(false);
    this.selectedProject.set(null);
  }
}