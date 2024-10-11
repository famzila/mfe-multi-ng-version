import { Component } from '@angular/core';
import packageJson from '../../package.json';

// const packageJson = require('../../package.json');
// const packageJson = require('../../package.json');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-web-cmp-mfe';
  ngVersion = packageJson.dependencies['@angular/core'];
}
