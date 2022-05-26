import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private apiURL = environment.apiURL;

  constructor(private httpClient: HttpClient) {}

  getPosts(): Observable<any>{
    return this.httpClient.get<Post[]>(this.apiURL)
  }
}
