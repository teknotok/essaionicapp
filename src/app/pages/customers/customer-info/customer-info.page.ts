import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../customer.modul';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.page.html',
  styleUrls: ['./customer-info.page.scss'],
})
export class CustomerInfoPage implements OnInit {
  customerInfoDetails:Customer;

  constructor(private activatedRoute:ActivatedRoute,private customerService:CustomersService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('customerid')) {
        return
      }
       const id = paramMap.get('customerid');
       console.log(id)
      this.customerInfoDetails = this.customerService.getCustomerInfo(id);
    })
  }

}
