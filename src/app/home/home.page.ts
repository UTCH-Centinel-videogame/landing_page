import { Component, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { Location } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  
  constructor
  (
    public modalController:ModalController,
    public fileOpener:FileOpener,
    public location:Location,
  ) {
    // this.fileOpener.open('../../assets/pdfs/1.pdf', 'application/pdf')
    //   .then(() => console.log('File is opened'))
    //   .catch(e => console.log('Error openening file', e));
  }
  isHovering = false;

  showButtons = false;
  @ViewChild('mySelect') mySelect: any;

  clearSelection() {
    this.mySelect.value = null;
  }

  goToPdf(x:any){
    const currentPath = this.location.path();
    const pdfUrl = `${currentPath}/pdf/${x}`;
    window.location.href = pdfUrl;
  }

  toggleButtons() {
    this.showButtons = !this.showButtons;
  }

  handleMouseMove(event: any): void {
    const circle = document.querySelector('.circle') as HTMLElement;
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const halfWidth = circle.offsetWidth / 2;
    const halfHeight = circle.offsetHeight / 2;
    circle.style.transform = `translate(${x - halfWidth}px, ${y - halfHeight}px)`;
    this.isHovering = true;
  }

  handleMouseLeave(): void {
    this.isHovering = false;
  }
  async openModal() {
    const modal = await this.modalController.create({
      component: ModalComponent,
      componentProps: {
        modalTitle: 'My Modal',
        modalData: { name: 'John Doe' }
      }
    });
  
    modal.present();
  }
}
