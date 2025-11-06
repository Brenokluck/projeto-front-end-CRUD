import { Component, OnInit, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  constructor(private router: Router) {}

  protected readonly title = signal('projeto-back-end-CRUD');

  ngOnInit(): void {
    this.router.navigate(['/home']);
  }
}
