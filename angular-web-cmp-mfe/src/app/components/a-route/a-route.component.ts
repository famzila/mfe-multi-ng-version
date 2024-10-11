import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-a-route',
  templateUrl: './a-route.component.html',
  styleUrl: './a-route.component.scss',
  standalone: true,
  imports: [ RouterLink ],
})
export class ARouteComponent {

}
