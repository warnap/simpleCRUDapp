import { Component, OnInit } from '@angular/core';

import { Category } from './category'
import { CategoryService } from './category.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  providers: [CategoryService],
  styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit {
  categories?: Category[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  onClick(category: Category): void {
    console.log(category.name + ' clicked')
  }

  getCategories(): void {
    this.categoryService.getCategories()
    .subscribe(categories => this.categories = categories);
  }

}
