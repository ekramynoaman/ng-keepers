import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  httpOptions = {
    headers: new HttpHeaders({
      // tslint:disable-next-line: max-line-length
      authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFiaGFyd29ya3MuY29tIiwicGFzc3dvcmQiOiIxMjM0NTYiLCJpYXQiOjE1ODU2NjkyNjgsImV4cCI6MTU4NTY3Mjg2OH0.3FAc6V7f0zmmR-GGdOH9gY0AQWMDN2t6FwCwuG-BUqA'
    })
  };

  constructor(private http: HttpClient) {}

  // Get all posts
  getAll() {
    return this.http.get(`${environment.apiUrl}/posts`, this.httpOptions);
  }
}
