
import { Component, ChangeDetectionStrategy, signal, effect, untracked } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(window:scroll)': 'onWindowScroll()',
  },
})
export class HeaderComponent {
  isMenuOpen = signal(false);
  isScrolled = signal(false);

  toggleMenu(): void {
    this.isMenuOpen.update(open => !open);
  }

  onWindowScroll(): void {
    const offset = window.scrollY;
    this.isScrolled.set(offset > 20);
  }
}
