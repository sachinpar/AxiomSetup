import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Section } from '../Models/Section';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }

  ReadFile(url){
    return this.http.get<Section[]>(url);
  }
}
