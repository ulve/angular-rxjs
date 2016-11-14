import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  mouseMove: Observable<any>;
  mouseDown: Observable<any>;
  mouseCoords: Observable<{x:number, y:number}>;
  clicked: Observable<boolean>;

  constructor() { }

  ngOnInit() {
    this.mouseMove = Observable.fromEvent(document, 'mousemove');
    this.mouseDown = Observable.fromEvent(document, 'mousedown');
    this.mouseCoords = this.mouseMove.map(e => { return { x:e.clientX, y: e.clientY } }).debounceTime(500);
    this.mouseCoords.subscribe();
    this.clicked = this.mouseDown.scan((acc, val) => !acc);
    this.mouseDown.subscribe();
  }
}
