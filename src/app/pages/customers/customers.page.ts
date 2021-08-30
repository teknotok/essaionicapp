import { Component, OnInit } from '@angular/core';
import { CustomersService } from './customers.service';
import { Customer } from './customer.modul';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {
  lastCustomersData:Customer[];
  constructor(private cusService: CustomersService) {
  }

  ngOnInit() {
    this.lastCustomersData = this.cusService.getAllCustomers();
  }

}
