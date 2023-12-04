import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ApiService } from 'src/app/components/sistema-crud/services/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DialogAdminComponent } from './dialog-admin/dialog-admin.component';
@Component({
  selector: 'app-crud-admin',
  templateUrl: './crud-admin.component.html',
  styleUrls: ['./crud-admin.component.css']
})
export class CrudAdminComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'email', 'action'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private dialog : MatDialog, private api : ApiService, private http : HttpClient) {
  }

  ngOnInit(): void {
    this.getAllAdmins();
  }


  openDialog() {
    this.dialog.open(DialogAdminComponent, {
      width: '30%'
    }).afterClosed().subscribe(val=>{
      if(val ==='save'){
      }
      this.getAllAdmins();
    })
  }

  getAllAdmins(){
    this.api.getAdmin()
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

  editAdmin(row : any){
    this.dialog.open(DialogAdminComponent,{
      width: '30%',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val ==='update'){

      }
      this.getAllAdmins();

    })
  }

  deleteAdmins(id:string){
    this.api.deleteAdmin(id)
    .subscribe({
      next:(res)=>{
        alert("Categoria deletada com sucesso");
        this.getAllAdmins();
      },
      error:()=>{
        alert("Não foi possivel deletar a categoria")
      }
    })
  }
}
