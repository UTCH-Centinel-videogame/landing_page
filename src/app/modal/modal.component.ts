import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent  implements OnInit {

  @Input() modalTitle: string = "";
  @Input() modalData: any;
  @Output() _closeModal: EventEmitter<any> = new EventEmitter();
  public mood: string = 'neutral';

  surveyForm: any;
  constructor(private modalController: ModalController) {
    this.surveyForm = new FormGroup({
      gameplayRating: new FormControl('', Validators.required),
      musicRating: new FormControl('', Validators.required),
      artRating: new FormControl('', Validators.required),
      storyRating: new FormControl('', Validators.required),
      difficultyRating: new FormControl('', Validators.required),
    })

  }

  ngOnInit() {

    // Set modal title
    if (!this.modalTitle) {
      this.modalTitle = 'Survey';
    }

    // Set modal data
    if (!this.modalData) {
      this.modalData = {};
    }
  }

  async closeModal() {
    await this.modalController.dismiss();
    this._closeModal.emit();
  }
  submitSurvey() {
    console.log(this.surveyForm.value);
    this.closeModal();
  }

}
