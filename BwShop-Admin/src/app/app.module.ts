import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatDialogModule, MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavAdmComponent } from './components/sistema-crud/nav-adm/nav-adm.component';
import { CrudCategoryComponent } from './components/sistema-crud/crud-category/crud-category.component';
import { DialogCategoryComponent } from './components/sistema-crud/crud-category/dialog-category/dialog-category.component';
import { CrudProductComponent } from './components/sistema-crud/crud-product/crud-product.component';
import { CrudAdminComponent } from './components/sistema-crud/crud-admin/crud-admin.component';
import { CrudClientComponent } from './components/sistema-crud/crud-client/crud-client.component';
import { DialogAdminComponent } from './components/sistema-crud/crud-admin/dialog-admin/dialog-admin.component';
import { DialogProductComponent } from './components/sistema-crud/crud-product/dialog-product/dialog-product.component';
import { CrudProviderComponent } from './components/sistema-crud/crud-provider/crud-provider.component';
import { DialogProviderComponent } from './components/sistema-crud/crud-provider/dialog-provider/dialog-provider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    NavAdmComponent,
    CrudCategoryComponent,
    DialogCategoryComponent,
    CrudProductComponent,
    CrudAdminComponent,
    CrudClientComponent,
    DialogAdminComponent,
    DialogProductComponent,
    CrudProviderComponent,
    DialogProviderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
