import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Home } from '../home/home';
import { Blog } from '../blog/blog';
import { About } from '../about/about';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive ,Home ,Blog ,About],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
  path ='1.png'
}

