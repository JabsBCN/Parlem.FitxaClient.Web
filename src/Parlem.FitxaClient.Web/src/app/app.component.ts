import { Component, OnInit } from '@angular/core';
import { CustomerClient, CustomerDto } from './customer.api.service';
import { ProductClient, ProductDto } from './customer.api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Parlem-FitxaClient-Web';

  constructor(private customerClient: CustomerClient, private productClient: ProductClient) { }

  public customer: CustomerDto;
  public products: ProductDto[];

  ngOnInit(): void {
    this.customerClient.details(11111)
      .subscribe(
        (customer: CustomerDto) => {
          this.customer = customer;
        });

    this.productClient.products(11111)
      .subscribe(
        (products: ProductDto[]) => {
          this.products = products;
        });
  }
}
