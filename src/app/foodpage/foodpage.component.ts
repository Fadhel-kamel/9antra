import { Component, OnInit } from '@angular/core';
import {Food} from "../shared/models/Food";
import {FoodService} from "../services/food/food.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit {
  food!: Food;
  constructor(private activatedRoute:ActivatedRoute,
              private foodService: FoodService,
              private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if(params['id'])
        this.food = foodService.getFoodById(params['id']);
    })
  }

  ngOnInit(): void {
        this.foodService.getAllProducts().subscribe();
  }

}
