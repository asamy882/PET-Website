import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @Input()
  columnDefs: any[] = [];
  @Input()
  rowData: any[] = [];
  @Output()
  selectedRow: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  addTriggered: EventEmitter<any> = new EventEmitter<any>();
  totalRecords: any;
  constructor() { }

  ngOnInit() {
  }
  RowSelect(selectedRow) {
    this.selectedRow.emit(selectedRow);
  }
  AddEventFucntion() {
    debugger
    this.addTriggered.emit({});
  }
}
