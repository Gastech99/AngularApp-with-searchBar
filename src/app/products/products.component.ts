import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  public products: any;
  public keyword: string = "";
  constructor(){

  }
  ngOnInit(): void {
    this.products = [
      {"id": 0, "name": "Computer", "price": 400000},
      {"id": 1, "name": "Monitor", "price": 250000},
      {"id": 2, "name": "Keyboard", "price": 5000},
      {"id": 3, "name": "Mouse", "price": 4000},
      {"id": 4, "name": "Printer", "price": 100000}
    ]
  }
  search(){
    console.log(this.keyword)
    let result: any[] = [];
    for(let p of this.products){
      if(p.name.includes(this.keyword)){
        result.push(p)
      }
    }
    this.products = result;
  }
  addProduct(p: any): void{

  }
  editProduct(p: any): void{
  
  }
  deleteProduct(p: any): void{
    let index = this.products.indexOf(p);
    this.products.splice(index, 1);
  }
}
