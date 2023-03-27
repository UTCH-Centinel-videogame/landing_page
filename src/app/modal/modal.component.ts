import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SurveyService } from '../survey-service/survey.service';
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
  constructor(
    private modalController: ModalController,
    private surveyService:SurveyService
    ) {
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
    const post = 
    {
      "gameplay":this.surveyForm.value.gameplayRating,
      "music":this.surveyForm.value.musicRating,
      "art": this.surveyForm.value.artRating,
      "story": this.surveyForm.value.storyRating,
      "difficulty":this.surveyForm.value.difficultyRating
  }
  this.surveyService.vote(post).subscribe((res:any)=>{
    if(res.status = 200){
      console.log("success")
    }
  },
  (err:any)=>{
    console.log("error")
  }
  )
    this.closeModal();
  }

}
