import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidenavComponent } from './pages/sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SidenavComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'poke-app';
}
