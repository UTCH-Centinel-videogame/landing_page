import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { PdfViewrComponent } from '../pdf-viewr/pdf-viewr.component';
const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'pdf/:document',
    component: PdfViewrComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
