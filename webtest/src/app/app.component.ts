import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [NavbarComponent, RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'webtest';
  name: string = '';
  setName(name: string) {
    this.name = name;
  }
}
