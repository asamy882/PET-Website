import { EventEmitter } from 'events';
import { Router } from '@angular/router';
import { Component, OnDestroy, ChangeDetectorRef, OnChanges, OnInit, Output } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnChanges, OnInit {
  display = false;

  ngOnInit(): void {
  }
  ngOnChanges() {

  }
  openSideMenu() {
    (this.display) ? this.display = false : this.display = true;
  }
}
