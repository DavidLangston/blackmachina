import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from 'rxjs';
import { PathLocationComponent } from "../../path-location/path-location.component";
import { Post } from "../post.model";
import { PostsService } from "../posts.service";
import { Response } from "@angular/http";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"]
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  private postsSub: Subscription;
  listingHover: boolean;
  id: string;

  constructor(public postsService: PostsService) {}

  ngOnInit() {
    this.posts = this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      }); 
  }
  
  // onHoverMessage() {
  //   this.id = 
  // }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}


