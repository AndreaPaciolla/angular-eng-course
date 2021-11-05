import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Post[]> {
    return <Observable<Post[]>>(
      this.httpClient.get('https://jsonplaceholder.typicode.com/posts')
    );
  }

  get(id: any): Observable<Post> {
    return <Observable<Post>>(
      this.httpClient.get('https://jsonplaceholder.typicode.com/posts/' + id)
    );
  }

  create(post: Post): Observable<Post> {
    return <Observable<Post>>(
      this.httpClient.post('https://jsonplaceholder.typicode.com/posts/', post)
    );
  }

  edit(post: Post): Observable<Post> {
    return <Observable<Post>>(
      this.httpClient.put('https://jsonplaceholder.typicode.com/posts/', post)
    );
  }
}
