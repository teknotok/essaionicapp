import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeknotokPageRoutingModule } from './teknotok-routing.module';

import { TeknotokPage } from './teknotok.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeknotokPageRoutingModule
  ],
  declarations: [TeknotokPage]
})
export class TeknotokPageModule {}
