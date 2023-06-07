import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
// binding through an alias ('serverElement)
export class ServerElementComponent implements OnInit {
  @Input('serverElement') element: {
    type: string,
    name: string,
    content: string
  }

  constructor() { }

  ngOnInit() {
  }

}