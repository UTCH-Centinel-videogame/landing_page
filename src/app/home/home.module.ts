import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { ModalComponent } from '../modal/modal.component';
import { HomePageRoutingModule } from './home-routing.module';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { PdfViewrComponent } from "../pdf-viewr/pdf-viewr.component"
import { PdfViewerModule } from 'ng2-pdf-viewer';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HomePageRoutingModule,
    PdfViewerModule,
  ],
  declarations: [HomePage, ModalComponent, PdfViewrComponent],
  providers:[
    FileOpener
  ]
})
export class HomePageModule {}
