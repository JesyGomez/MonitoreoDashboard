import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
})
export class HeadComponent {
  @Output() toggleSidebar = new EventEmitter<void>();
}
