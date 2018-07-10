import { Injectable, Pipe } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from './post.model';
import { Http } from '@angular/http';
//import { Observable } from 'rxjs/Rx';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';


@Injectable({providedIn: 'root'})
export class PostsService {

  constructor(private http: Http) { }

  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  getPosts() {
    return [...this.posts];
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string, timestamp: string, location: string) {  
    const post = {title: title, content: content, timestamp: timestamp, location: location};
    this.posts.unshift(post);
    this.postsUpdated.next([...this.posts]);
  }

  sendPost(post: Post) {
    var url = 'https://stormy-fortress-35888.herokuapp.com/api/content';
    // var url = 'http://localhost:3000/api/content';
    return this.http.post(url, post);
  }
}
