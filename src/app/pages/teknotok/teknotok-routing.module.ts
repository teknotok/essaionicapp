import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeknotokPage } from './teknotok.page';

const routes: Routes = [
  {
    path: '',
    component: TeknotokPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeknotokPageRoutingModule {}
