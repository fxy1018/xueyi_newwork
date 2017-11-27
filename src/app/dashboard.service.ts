import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant';
import { RESTAURANTS } from './mock-restaurants';


@Injectable()
export class DashboardService {

  constructor() { }

  getRestaurant(rid): Restaurant {
    for (var i=0; i < RESTAURANTS.length; i++){
      if (RESTAURANTS[i].rid === rid){
        return(RESTAURANTS[i])
      }
    }
    return(null);
  };

  getRestaurants(restaurant): Restaurant[] {
    return(RESTAURANTS)
  }

}
