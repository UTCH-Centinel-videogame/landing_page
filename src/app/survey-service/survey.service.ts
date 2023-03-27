import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private http:HttpClient) { }

  vote(data: any) {
    return this.http.post('http://127.0.0.1:8000/votes/', data);
  }
}
