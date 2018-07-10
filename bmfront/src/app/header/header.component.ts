import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

pages: string[] = [
	'page1', 'page2', 'page3'
];


}
