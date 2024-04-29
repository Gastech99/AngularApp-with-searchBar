import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FirstAppp';

  public currentRoute: any;

  constructor(private router: Router){

  }

  gotoHome(): void{
    this.currentRoute = "home";
    this.router.navigateByUrl("/home")
  }

  gotoProducts(): void{
    this.currentRoute = "products";
    this.router.navigateByUrl("/products")
  }
}
