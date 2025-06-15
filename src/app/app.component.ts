import { Component } from '@angular/core';
import { RouteService } from './services/route.service';
import { Route } from './models/route.model';
import {RouteTableComponent} from './components/route-table/route-table.component';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouteTableComponent, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  routes: Route[] = [];

  constructor(private routeService: RouteService) {
    this.routes = this.routeService.getRoutes();
  }
}
