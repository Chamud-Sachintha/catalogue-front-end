import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../../../shared/services/catalogue/catalogue.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from '../../../shared/models/Request/request';
import { Product } from '../../../shared/models/Product/product';

@Component({
  selector: 'app-inside-product',
  standalone: true,
  imports: [],
  templateUrl: './inside-product.component.html',
  styleUrl: './inside-product.component.css'
})
export class InsideProductComponent implements OnInit {

  requestParamModel = new Request();
  productInfoModel = new Product();
  productId!: any;

  constructor (private catalougeService: CatalogueService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params['productId'];

    this.loadproductInfo();
  }

  loadproductInfo() {
    this.requestParamModel.productId = this.productId;

    this.catalougeService.getProductInfoById(this.requestParamModel).subscribe((resp: any) => {
      if (resp.code === 1) {
        const dataList = JSON.parse(JSON.stringify(resp.data));

        this.productInfoModel.productName = dataList[0].productName;
        this.productInfoModel.categoryName = dataList[0].categoryName;
        this.productInfoModel.description = dataList[0].description;
        this.productInfoModel.firstImage = dataList[0].firstImage;
        this.productInfoModel.productWeight = dataList[0].productWeight;
      }
    })
  }

}
