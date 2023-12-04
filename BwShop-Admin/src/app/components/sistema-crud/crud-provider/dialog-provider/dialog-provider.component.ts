import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/components/sistema-crud/services/api.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-dialog-',
  templateUrl: './dialog-provider.component.html',
  styleUrls: ['./dialog-provider.component.css']
})
export class DialogProviderComponent implements OnInit{
  providerForm!: FormGroup;
  actionBtn : string = "Salvar"
  constructor(private formBuilder : FormBuilder,
    private api : ApiService,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef : MatDialogRef<DialogProviderComponent> ) { }

  ngOnInit(): void {
    this.providerForm = this.formBuilder.group({
      name : ['' ,Validators.required],
      email : ['' ,Validators.required],
      phone : ['' ,Validators.required],
      cnpj : ['' ,Validators.required],

    });
    console.log(this.editData);
    if(this.editData){
      this.actionBtn = "Atualizar";
      this.providerForm.controls['name'].setValue(this.editData.name);
      this.providerForm.controls['email'].setValue(this.editData.email);
      this.providerForm.controls['phone'].setValue(this.editData.phone);
      this.providerForm.controls['cnpj'].setValue(this.editData.cnpj);
      this.getProvider
    }
  }

  AddProvider(){
    if(!this.editData){
      if(this.providerForm.valid){
      this.api.postProvider(this.providerForm.value)
      .subscribe({
        next:(res)=>{
          alert("Fornecedor adicionada com sucesso");
          this.providerForm.reset();
          this.dialogRef.close('Salvo');
          this.getProvider();
        },
        error:()=>{
          alert("Erro não foi possivel adicionar o Fornecedor")
        }
      })
     }
    } else{
      this.updateProvider()
    }
  }

  updateProvider(){
    this.api.putProvider(this.providerForm.value,this.editData.id)
    .subscribe({
      next:(res)=>{
        alert("Fornecedor atualizada com sucesso");
        this.dialogRef.close('Atualizado'),
        this.getProvider
      },
      error:()=>{
        alert("Erro não foi possivel atualizar o Fornecedor")
      }
    })
  }


  getProvider(){
    this.api.getProvider()
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
