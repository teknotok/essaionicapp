import { Injectable } from '@angular/core';
import { Customer } from './customer.modul';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private customersData: Customer[] = [
    {
      id: 1,
      date: '15-08-2021',
      name: 'selim cadoa',
      model: 'samsung',
      marka: 'i9300',
      problem: 'ekran',
      imei: 123214332454,
      note: 'ekran kırık',
      teslimat: false,
      teslimatTarihi: '18-08-2021',
      avatar: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Arh-avatar.jpg'
    }, {
      id: 2,
      date: '15-08-2021',
      name: 'selim cadoa',
      model: 'samsung',
      marka: 'i9300',
      problem: 'ekran',
      imei: 123214332454,
      note: 'ekran kırık',
      teslimat: true,
      teslimatTarihi: '18-08-2021',
      avatar: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Arh-avatar.jpg'
    }, {
      id: 3,
      date: '15-08-2021',
      name: 'selim cadoa',
      model: 'samsung',
      marka: 'i9300',
      problem: 'ekran',
      imei: 123214332454,
      note: 'ekran kırık',
      teslimat: false,
      teslimatTarihi: '18-08-2021',
      avatar: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Arh-avatar.jpg'
    }, {
      id: 4,
      date: '15-08-2021',
      name: 'selim cadoa',
      model: 'samsung',
      marka: 'i9300',
      problem: 'ekran',
      imei: 123214332454,
      note: 'ekran kırık',
      teslimat: false,
      teslimatTarihi: '18-08-2021',
      avatar: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Arh-avatar.jpg'
    }, {
      id: 5,
      date: '15-08-2021',
      name: 'selim cadoa',
      model: 'samsung',
      marka: 'i9300',
      problem: 'ekran',
      imei: 123214332454,
      note: 'ekran kırık',
      teslimat: false,
      teslimatTarihi: '18-08-2021',
      avatar: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Arh-avatar.jpg'
    }, {
      id: 6,
      date: '15-08-2021',
      name: 'selim cadoa',
      model: 'samsung',
      marka: 'i9300',
      problem: 'ekran',
      imei: 123214332454,
      note: 'ekran kırık',
      teslimat: false,
      teslimatTarihi: '18-08-2021',
      avatar: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Arh-avatar.jpg'
    },
  ]
  constructor() { }

  getAllCustomers(){
    return [...this.customersData]
  }

  getCustomerInfo(customerId: number|string){
    return {
      ...this.customersData.find(item => item.id == customerId)
    }
  }

}
