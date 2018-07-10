import { Component, OnInit } from "@angular/core";
import { Post } from "../posts/post.model";
import { PostsService } from "../posts/posts.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-decrypt-message',
  templateUrl: './decrypt-message.component.html',
  styleUrls: ['./decrypt-message.component.css']
})
export class DecryptMessageComponent implements OnInit{

	posts: Post[]; 
	post: Post;
	arrayIndex: any;

	constructor(public postsService: PostsService, 
		private route: ActivatedRoute) {
		this.posts = this.postsService.getPosts(); 
		this.post = this.posts[0];
		this.arrayIndex = this.route.snapshot.params['id'];
		this.post = this.posts[this.arrayIndex];
	} 

	ngOnInit () {
	}

}
