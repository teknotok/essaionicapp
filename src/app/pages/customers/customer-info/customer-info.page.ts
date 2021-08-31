import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Customer } from '../customer.modul';
import { CustomersService } from '../customers.service';


@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.page.html',
  styleUrls: ['./customer-info.page.scss'],
})
export class CustomerInfoPage implements OnInit {
  customerInfoDetails: Customer;

  constructor(
    private activatedRoute: ActivatedRoute,
    private customerService: CustomersService,
    private router: Router,
    private alert: AlertController,
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('customerid')) {
        return
      }
      const id = paramMap.get('customerid');
      this.customerInfoDetails = this.customerService.getCustomerInfo(id);
    })
  }

  async deleteItem() {
    const alert = await this.alert.create({
      header: 'Danger',
      message: 'Are You Sure',
      buttons: [
        {
          text: 'No',
        },
        {
          text: 'Yes',
          handler: () => {
            this.confitmDeleteItem();
          }
        }
      ]
    })
    await alert.present();
  }

  confitmDeleteItem() {
    this.customerService.deleteItemCustomerService(this.customerInfoDetails.id);
    this.router.navigate(['../']);
  }

}
