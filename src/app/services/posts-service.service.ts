import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../config/api';
import { Observable } from 'rxjs';
import { UserData } from '../models/user-data.model';

@Injectable({
  providedIn: 'root'
})
export class PostsServiceService {
  apiUrl = baseUrl;
  // inject:
  constructor(private http: HttpClient) { }

  createData(posts){
    return this.http.post("http://localhost:3000/posts", posts);
  }

  getAllData(){
    return this.http.get("http://localhost:3000/posts");
  }

  updateData(posts){
    return this.http.put("http://localhost:3000/posts/" + posts._id, posts);
  }

  deleteData(posts){
    return this.http.delete("http://localhost:3000/posts/" +posts._id);
  }
}
