import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogProductComponent} from 'src/app/components/sistema-crud/crud-product/dialog-product/dialog-product.component';
import { ApiService } from 'src/app/components/sistema-crud/services/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {DialogCategoryComponent} from 'src/app/components/sistema-crud/crud-category/dialog-category/dialog-category.component';
import { Categoria } from 'src/app/models/Categoria';

@Component({
  selector: 'app-crud-product',
  templateUrl: './crud-product.component.html',
  styleUrls: ['./crud-product.component.css']
})
export class CrudProductComponent implements OnInit {
  public category! : Categoria[]
  displayedColumns: string[] = ['id', 'name','description', 'idCategory', 'amount', 'price', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  constructor(private dialog : MatDialog, private api : ApiService, private http : HttpClient) {
  }
  ngOnInit(): void {
  this.getAllProducts();
  this.getAllCategorys();
  }


  openDialog() {
    this.dialog.open(DialogProductComponent, {
      width: '30%'
    }).afterClosed().subscribe(val=>{
      if(val ==='save'){
      }
      this.getAllProducts();
    })
  }

  getAllProducts(){
    this.api.getProduct()
    .subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error:(err)=>{
        alert("Erro")
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editProduct(row : any){
    this.dialog.open(DialogProductComponent,{
      width: '30%',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val ==='update'){

      }
      this.getAllProducts();

    })
  }

  deleteProduct(id:string){
    this.api.deleteProduct(id)
    .subscribe({
      next:(res)=>{
        alert("Produto deletado com sucesso");
        this.getAllProducts();
      },
      error:()=>{
        alert("Não foi possivel deletar o Produto")
      }
    })
  }
  getAllCategorys() {
    this.api.getCategory()
      .subscribe(
        result => {
          this.category = result
          console.log(this.category)
        },
        (err) => {
          alert("Erro")
        },

      )
  }
}
