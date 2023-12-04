import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogCategoryComponent} from 'src/app/components/sistema-crud/crud-category/dialog-category/dialog-category.component';
import { ApiService } from 'src/app/components/sistema-crud/services/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DialogProviderComponent } from './dialog-provider/dialog-provider.component';
@Component({
  selector: 'app-crud-provider',
  templateUrl: './crud-provider.component.html',
  styleUrls: ['./crud-provider.component.css']
})
export class CrudProviderComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name','email','phone','cnpj', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  constructor(private dialog : MatDialog, private api : ApiService, private http : HttpClient) {
  }
  ngOnInit(): void {
  this.getAllProviders();
  }


  openDialog() {
    this.dialog.open(DialogProviderComponent, {
      width: '30%'
    }).afterClosed().subscribe(val=>{
      if(val ==='save'){
      }
      this.getAllProviders();
    })
  }

  getAllProviders(){
    this.api.getProvider()
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

  editProvider(row : any){
    this.dialog.open(DialogProviderComponent,{
      width: '30%',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val ==='update'){

      }
      this.getAllProviders();

    })
  }

  deleteProvider(id:string){
    this.api.deleteProvider(id)
    .subscribe({
      next:(res)=>{
        alert("Fornecedor deletada com sucesso");
        this.getAllProviders();
      },
      error:()=>{
        alert("Não foi possivel deletar o Fornecedor")
      }
    })
  }
}




