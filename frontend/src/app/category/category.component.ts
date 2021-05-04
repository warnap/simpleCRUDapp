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
  selectedCategory?: Category;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  onClick(category: Category): void {
    this.categoryService.getCategory(category.id)
    .subscribe(category => this.selectedCategory = category);
  }

  getCategories(): void {
    this.categoryService.getCategories()
    .subscribe(categories => this.categories = categories);
  }

  save(category: Category): void {
    var new_category: Category = category;

    if(category.id != null){
      this.categoryService.updateCategory(category)
      .subscribe(category => new_category = category);
      // this.getCategories();
    } else {
      this.categoryService.addCategory(category)
      .subscribe(category => new_category = category);
      this.categories?.push(new_category);
    }
    this.getCategories();
    this.selectedCategory = undefined;
  }

  exit(): void {
    this.selectedCategory = undefined;
  }

  add(): void {
    var new_category = <Category>{};
    this.selectedCategory = new_category;
  }

  delete(category: Category): void {
    this.categories = this.categories?.filter(c => c !== category);
    const id = category.id;
    this.categoryService.deleteCategory(id).subscribe();
  }
}
