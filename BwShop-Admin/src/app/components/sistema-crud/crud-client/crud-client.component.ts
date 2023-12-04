import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ApiService } from 'src/app/components/sistema-crud/services/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-crud-client',
  templateUrl: './crud-client.component.html',
  styleUrls: ['./crud-client.component.css']
})
export class CrudClientComponent implements OnInit {
  displayedColumns: string[] = ['id','nome','cpf','email','telefone','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  constructor(private dialog : MatDialog, private api : ApiService, private http : HttpClient) {
  }
  ngOnInit(): void {
  this.getAllClients();
  }


  getAllClients(){
    this.api.getClient()
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



  deleteClient(id:string){
    this.api.deleteClient(id)
    .subscribe({
      next:(res)=>{
        alert("Categoria deletada com sucesso");
        this.getAllClients();
      },
      error:()=>{
        alert("Não foi possivel deletar a categoria")
      }
    })
  }
}

