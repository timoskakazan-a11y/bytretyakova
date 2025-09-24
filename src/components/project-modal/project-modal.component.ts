
import { Component, ChangeDetectionStrategy, input, output, signal, computed } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Project } from '../../models/portfolio.model';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './project-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectModalComponent {
  project = input.required<Project | null>();
  close = output<void>();

  currentImageIndex = signal(0);
  
  totalImages = computed(() => this.project()?.images.length ?? 0);

  closeModal(): void {
    this.close.emit();
  }

  nextImage(): void {
    this.currentImageIndex.update(index => (index + 1) % this.totalImages());
  }

  prevImage(): void {
    this.currentImageIndex.update(index => (index - 1 + this.totalImages()) % this.totalImages());
  }

  handleBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).id === 'modal-backdrop') {
      this.closeModal();
    }
  }
}
