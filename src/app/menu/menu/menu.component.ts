import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MenuService } from '../../menu.service';
import { DashboardService } from '../../dashboard.service';

import {Restaurant} from "../../restaurant";
import { Course } from "../../course";


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  restaurant: Restaurant;
  courses: Course[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private menuService:MenuService,
    private dashboardService:DashboardService) {}

  ngOnInit() {
    this.getCourses();

  }

  getCourses(){
    const rid = +this.route.snapshot.paramMap.get('rid');
    this.restaurant = this.dashboardService.getRestaurant(rid);
    this.courses = this.menuService.getCourses(rid);
  }
}
