import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/bufferCount';

@Component({
  selector: 'app-siffra',
  templateUrl: './siffra.component.html',
  styleUrls: ['./siffra.component.css']
})
export class SiffraComponent implements OnInit {
  siffror: Observable<number>;
  sifferhistorik: Observable<number[]>;
  
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.siffror = this.dataService.siffror;
    this.siffror.subscribe();
    
    this.sifferhistorik = this.dataService.siffror.bufferCount(3);
    this.sifferhistorik.subscribe();
  }

   onClick() {
    this.dataService.addSiffra(Math.floor(Math.random() * 100 + 1));
  }

}