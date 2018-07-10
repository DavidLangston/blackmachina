import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { PostsService } from "../posts.service";
import { Response } from "@angular/http";
import { LocationService } from "../../location.service";
// import { Post } from '../post.model';

@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html",
  styleUrls: ["./post-create.component.css"]
})
export class PostCreateComponent {
  enteredTitle = "";
  enteredContent = "";
  timestamp: string;
  location: string = "";
  url: string = "";
  state: string = "";
  country: string = "";
  post: any;

  constructor(public postsService: PostsService, 
    public locationService: LocationService) {}

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.timestamp = new Date().toString();

    this.locationService.getPosition()
    .then((position: any) => {
    this.url = 'https://nominatim.openstreetmap.org/reverse?format=json&lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&zoom=18&addressdetails=1';  
      
      this.locationService.getLocation(this.url)
      .subscribe((response: Response) => { 
        this.state = response.json().address.state || ""; 
        this.country = response.json().address.country || ""; 
        this.location = `${this.state}`;
        this.post = {
          title: form.value.title, 
          content: form.value.content, 
          timestamp: this.timestamp, 
          location: this.location,
        };

        this.postsService.sendPost(this.post)
        .subscribe((response: Response) => { 
          console.log(response.json());
        this.postsService.addPost(form.value.title, form.value.content, this.timestamp, this.location);
        form.resetForm();
        },
        (error) => console.log(error));


      }, (error) => console.log("OHHH NO!"));

      // if (this.location !== "") {

      // }

    });    
 
  }
}

