import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FoodService} from "../../services/food/food.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  foods: any;

  constructor(private activatedRoute:ActivatedRoute,
              private foodService: FoodService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.foodService.getAllProducts().subscribe(
      (data) => {
        this.foods = data;
      }
    );
  }



  deleteItem(salads: string) {

  }

  modifyItem(salads: string) {

  }

  addItem(salads: string) {

  }
}
