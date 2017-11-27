import { Injectable } from '@angular/core';
import { COURSES } from "./mock-courses";


@Injectable()
export class MenuService {

  constructor() { }
  getCourses(rid){
    var courses = []
    for (var i =0; i<COURSES.length; i++ ){
      if (COURSES[i].rid === rid){
        courses.push(COURSES[i])
      }
    }
    return(courses)
  }
}
