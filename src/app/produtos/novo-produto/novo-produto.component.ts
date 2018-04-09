import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Produto } from './produto.model';

@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html',
  styleUrls: ['./novo-produto.component.css']
})
export class NovoProdutoComponent implements OnInit {

  public ref: string
  public category: string
  public tags: Array<any>
  public image1: string
  public image2: string
  public image3: string
  public disabledProduct: boolean = false

  private formulario: FormGroup = new FormGroup({
    'ref': new FormControl(null),
    'category': new FormControl(null),
    'tags': new FormControl(null),
    'image1': new FormControl(null),
    'image2': new FormControl(null),
    'image3': new FormControl(null),
    'disabledProduct': new FormControl(null)
  })

  constructor() { }
  
  selectedCompanyCustomPromise: any
  companies: any[] = [];
  loading = false;
  companiesNames = ['Pedras', 'Pérolas', 'Zircônias'];

    ngOnInit() {
        this.companiesNames.forEach((c, i) => {
            this.companies.push({ id: i, name: c });
        });
    }

    addTag(name) {
        return { name: name, tag: true };
    }

    addTagPromise(name) {
        return new Promise((resolve) => {
          console.log(resolve)
            this.loading = true;
            setTimeout(() => {
                resolve({ id: 5, name: name, valid: true });
                this.loading = false;
            }, 1000);
        })
    }
    

  public saveProduct():void {
    let product: Produto = new Produto(
      this.ref = this.formulario.value.ref,
      this.category = this.formulario.value.category,
      this.tags = this.formulario.value.tags,
      this.image1 = this.formulario.value.image1,
      this.image2 = this.formulario.value.image2,
      this.image3 = this.formulario.value.image3,
      this.disabledProduct = this.formulario.value.disabledProduct
    )
    console.log(product)

  }

}
