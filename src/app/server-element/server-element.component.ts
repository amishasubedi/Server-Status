import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})

// binding through an alias ('serverElement)
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input('serverElement') element: {
    type: string,
    name: string,
    content: string
  }

  @ViewChild('heading', { static: true }) header: ElementRef;


  constructor() {
    console.log("constructor called")
  }

  // called after a bound input property ngOnChanges
  ngOnChanges(changes: SimpleChanges) {
    console.log("ng On changes called");
    console.log(changes);
  }

  // called once the component is initialized
  ngOnInit() {
    console.log("ngOnInit called");

    // expecting empty -  can't check value of element because it's not rendered yet
    console.log("Text content: " + this.header.nativeElement.textContent);
  }

  // called during every detection run
  ngDoCheck() {
    console.log("ngDoCheckCalled");
  }

  // called after content (ng-content) has been projected into view
  ngAfterContentInit() {
    console.log("ngAfterContentInit called");
  }

  // called everytime the projected content has been ngAfterContentChecked
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked called");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit called");
    console.log("Text content: " + this.header.nativeElement.textContent); // expecting test1
  }

  // alled everytime the view (and child views) has been ngAfterViewChecked
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked called");
  }

  // called once the component is about to be destroyed
  ngOnDestroy() {
    console.log("ngOnDestroy callled");
  }

}
