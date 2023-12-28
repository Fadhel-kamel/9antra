import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FoodService} from "../../services/food/food.service";
import {Food} from "../../shared/models/Food";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   food: Food | undefined;

  constructor(private activatedRoute:ActivatedRoute,
              private foodService: FoodService,
              private router: Router) {

  }

  ngOnInit(): void {

  }

  addFood(p: any) {
    this.foodService.addFood(p).subscribe(() => {


    });
  }
}
