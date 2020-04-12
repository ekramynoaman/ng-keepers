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
      'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFiaGFyd29ya3MuY29tIiwicGFzc3dvcmQiOiIxMjM0NTYiLCJpYXQiOjE1ODY3MDQ1ODMsImV4cCI6MTU4NjcwODE4M30.Uxzo8InrBfejDVt-Q5iaEWeK_8t4PHQAx10pxUXAzpM'
    })
  };

  constructor(private http: HttpClient) {}

  // Get all posts
  getAll() {
    return this.http.get(`${environment.apiUrl}/posts`, this.httpOptions);
  }


  // Delete post
  deletePost(postId) {
    return this.http.delete(`${environment.apiUrl}/posts/${postId}`, this.httpOptions);
  }

  // Add post
  addPost(data) {
    return this.http.post(`${environment.apiUrl}/posts`, data, this.httpOptions);
  }

    // Get post by id
    getPost(postId) {
      return this.http.get(`${environment.apiUrl}/posts/${postId}`, this.httpOptions);
    }

    updatePost(data, postId) {
      return this.http.put(`${environment.apiUrl}/posts/${postId}`, data, this.httpOptions);
    }




}
