import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  //serverElements = [];
  // newServerName = '';
  //newServerContent = '';

  // @Output decorator indicates that these properties are output properties (emit events to the parent component)
  // serverCreated and bluePrintCreated event will emit an object with serverName and serverContent properties
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() bluePrintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  @ViewChild('serverContentInput', { static: true }) serverContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  // Emit the serverCreated event with the new server name and content
  onAddServer(nameInput: HTMLInputElement) {
    //console.log(this.serverContentInput);
    this.serverCreated.emit({ serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value });

  }

  // Emit the bluePrintCreated event with the new server name and content
  onAddBlueprint(contentInput: HTMLInputElement) {
    //console.log(this.serverContentInput);
    this.bluePrintCreated.emit({ serverName: contentInput.value, serverContent: this.serverContentInput.nativeElement.value })
  }

}
