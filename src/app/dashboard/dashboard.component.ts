import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {
  restaurants: Restaurant[];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
  }

  getRestaurants(restaurant): void {
    this.restaurants = this.dashboardService.getRestaurants(restaurant);
  }
}
