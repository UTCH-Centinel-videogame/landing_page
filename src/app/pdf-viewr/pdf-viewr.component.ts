import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-pdf-viewr',
  templateUrl: './pdf-viewr.component.html',
  styleUrls: ['./pdf-viewr.component.scss'],
})
export class PdfViewrComponent  implements OnInit {

  constructor(private location:Location,private route: ActivatedRoute) { }
  filename:any 
  ngOnInit() {
    this.filename = this.route.snapshot.paramMap.get('document');
  }

  goBack(){
    this.location.back();
  }
}
