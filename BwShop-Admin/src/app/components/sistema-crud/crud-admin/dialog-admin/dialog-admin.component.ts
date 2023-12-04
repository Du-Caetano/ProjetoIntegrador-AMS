import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/components/sistema-crud/services/api.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog-admin.component.html',
  styleUrls: ['./dialog-admin.component.css']
})
export class DialogAdminComponent implements OnInit{
  adminForm !: FormGroup;
  actionBtn : string = "Salvar"
  constructor(private formBuilder : FormBuilder,
    private api : ApiService,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef : MatDialogRef<DialogAdminComponent> ) { }

  ngOnInit(): void {
    this.adminForm = this.formBuilder.group({
      name : ['' ,Validators.required],
      email : ['' ,Validators.required],

    });
    console.log(this.editData);
    if(this.editData){
      this.actionBtn = "Atualizar";
      this.adminForm.controls['name'].setValue(this.editData.name);
      this.adminForm.controls['email'].setValue(this.editData.email);

      this.getAdmins
    }
  }

  AddAdmin(){
    if(!this.editData){
      if(this.adminForm.valid){
      this.api.postAdmin(this.adminForm.value)
      .subscribe({
        next:(res)=>{
          alert("Admin adicionada com sucesso");
          this.adminForm.reset();
          this.dialogRef.close('Salvo');
          this.getAdmins();
        },
        error:()=>{
          alert("Erro não foi possivel adicionar o admin")
        }
      })
     }
    } else{
      this.updateAdmin()
    }
  }

  updateAdmin(){
    this.api.putAdmin(this.adminForm.value,this.editData.id)
    .subscribe({
      next:(res)=>{
        alert("Categoria atualizada com sucesso");
        this.dialogRef.close('Atualizado'),
        this.getAdmins
      },
      error:()=>{
        alert("Erro não foi possivel atualizar a categoria")
      }
    })
  }


  getAdmins(){
    this.api.getAdmin()
    .subscribe({
      next:(res)=>{
        console.log(res);
      },
      error:(err)=>{
        alert("Erro")
      }
    })
  }
}
