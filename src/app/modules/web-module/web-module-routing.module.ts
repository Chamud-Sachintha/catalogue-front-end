import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppHomeComponent } from './app-home/app-home.component';
import { InsideProductComponent } from './inside-product/inside-product.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: AppHomeComponent
      },
    ],
  },
  {
    path: 'inside-product/:productId',
    component: InsideProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebModuleRoutingModule { }
