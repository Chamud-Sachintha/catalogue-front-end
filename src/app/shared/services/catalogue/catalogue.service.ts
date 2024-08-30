import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Request } from '../../models/Request/request';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  constructor(private http: HttpClient) { }

  getAllProductList() {
    const path = environment.apiUrl + "get-all-products";
    return this.http.post(path, new Request());
  }

  getAllCategoryList() {
    const path = environment.apiUrl + "get-all-caegories";
    return this.http.post(path, new Request());
  }

  filterProductsByCategory(requestParamModel: Request) {
    const path = environment.apiUrl + "filter-products-by-category";
    return this.http.post(path, requestParamModel);
  }

  getProductInfoById(requestParamModel: Request) {
    const path = environment.apiUrl + "get-product-info";
    return this.http.post(path, requestParamModel);
  }
}
