import { Component, Renderer2, OnInit } from '@angular/core';


@Component({
  selector: 'app-adminsidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class AdminSidebarComponent  {

  constructor(private renderer: Renderer2) { }

}
