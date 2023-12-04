import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudAdminComponent } from './components/sistema-crud/crud-admin/crud-admin.component';
import { CrudCategoryComponent } from './components/sistema-crud/crud-category/crud-category.component';
import { CrudProductComponent } from './components/sistema-crud/crud-product/crud-product.component';
import { CrudClientComponent } from './components/sistema-crud/crud-client/crud-client.component';
import { CrudProviderComponent } from './components/sistema-crud/crud-provider/crud-provider.component';

const routes: Routes = [
  {path:'', component: CrudAdminComponent},
  {path:'category', component: CrudCategoryComponent},
  {path:'product', component: CrudProductComponent},
  {path:'client', component: CrudClientComponent},
  {path:'provider', component: CrudProviderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
