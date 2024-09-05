import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../../../shared/services/catalogue/catalogue.service';
import { Product } from '../../../shared/models/Product/product';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { Category } from '../../../shared/models/Category/category';
import { Request } from '../../../shared/models/Request/request';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-home',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule, FormsModule],
  templateUrl: './app-home.component.html',
  styleUrl: './app-home.component.css'
})
export class AppHomeComponent implements OnInit {

  productList: Product[] = [];
  categoryList: Category[] = [];
  filteredProducts: Product[] = [];
  requestParamModel = new Request();
  searchText = '';

  currentPage = 1;
  itemsPerPage = 10;
  totalItems = 100;

  constructor(private productService: CatalogueService, private router: Router) { }

  ngOnInit(): void {
    this.loadProductList();
    this.loadCategoryList();
  }

  pageChanged(event: any): void {
    this.currentPage = event;
    // this.loadAllProductList();
  }

  loadProductList() {
    this.productService.getAllProductList().subscribe((resp: any) => {
      if (resp.code === 1) {
        const dataList = JSON.parse(JSON.stringify(resp.data));

        dataList[0].forEach((el: any) => {
          this.productList.push(el)
          this.filteredProducts.push(el);
        })
      }
    })
  }

  loadCategoryList() {
    this.productService.getAllCategoryList().subscribe((resp: any) => {
      if (resp.code === 1) {
        const dataList = JSON.parse(JSON.stringify(resp.data));

        dataList[0].forEach((el: any) => {
          this.categoryList.push(el)
        })
      }
    })
  }

  filterProductsByCategory(categoryId: string) {

    this.filteredProducts = [];

    if (categoryId == "99") {
      this.loadProductList();
    } else {
      this.requestParamModel.categoryId = categoryId;

      this.productService.filterProductsByCategory(this.requestParamModel).subscribe((resp: any) => {
        if (resp.code === 1) {
          const dataList = JSON.parse(JSON.stringify(resp));

          dataList.data[0].forEach((el: any) => {
            this.filteredProducts.push(el);
          })
        }
      })
    }
  }

  filterProductsByName() {
    this.filteredProducts = this.productList.filter(product =>
      product.productName.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  onClickSeeProduct(productId: string) {
    this.router.navigate(['/inside-product', productId]);
    return false;
  }

}
