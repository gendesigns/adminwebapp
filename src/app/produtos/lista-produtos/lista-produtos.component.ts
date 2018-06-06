import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css'],
  providers: [ProdutosService]
})
export class ListaProdutosComponent implements OnInit {

  public searchAneis
  public searchBrincos
  public searchColares
  public searchPingentes
  public searchPulseiras
  public p

  public produtos

  constructor( private produtoService: ProdutosService ) { 
    /* 
    //Update All Products
    this.produtos = this.produtoService.getCollection('Pulseiras')
    this.produtos.subscribe(element => {
      element.forEach(elem => {
        this.produtoService.updateProduto('Pulseiras',elem.key, {status:'Ativo'})
        // console.log(elem)    
      });
      
    });
    */
    
  }

  ngOnInit() {

  }

}