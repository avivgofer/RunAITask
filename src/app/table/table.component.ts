import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Department } from 'src/app/departments/department.interface';
import { Employee } from 'src/app/employees/employee.interface';
import { TableDataSource } from './table.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() dataSource: (Employee | Department)[];
  @Input() tableColumnsData: TableDataSource[];

  @Output() remove = new EventEmitter<Employee | Department>();

  displayedColumns: string[] = [];

  ngOnInit(): void {
    this.displayedColumns = [
      ...this.tableColumnsData.map(c => c.property),
      'delete'
    ];
  }
}
