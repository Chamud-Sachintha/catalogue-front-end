import { Routes } from '@angular/router';
import { WebLayoutComponent } from './layouts/web-layout/web-layout.component';

export const routes: Routes = [
    {
        path: '',
        component: WebLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () => import("./modules/web-module/web-module.module").then(m => m.WebModuleModule)
            }
        ]
    },
];
