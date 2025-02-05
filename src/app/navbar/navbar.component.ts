import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isNavbarVisible: boolean = false;

  @ViewChild('toast', { static: false }) toast!: ElementRef;

  constructor(
    public authService: AuthService,
    private renderer: Renderer2,
    private router: Router
  ) {
    // Close navbar when navigating to a new page
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.closeNavbar();
      }
    });
  }

  toggleNavbar(): void {
    this.isNavbarVisible = !this.isNavbarVisible;
  }

  checkAuthAndShowToast(event: Event): void {
    if (!this.authService.currentUserSig()) {
      event.preventDefault(); // Prevent navigation
      this.showToast();
    }
  }

  showToast() {
    this.renderer.addClass(this.toast.nativeElement, 'show');
    setTimeout(() => {
      this.renderer.removeClass(this.toast.nativeElement, 'show');
    }, 3000);
  }

  // Close navbar when switching pages
  closeNavbar() {
    this.isNavbarVisible = false;
  }
}
