import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import * as Model from './model/employee-list.model';
import * as RegisterModel from '../model/register';
import { WebService } from '../services/web.service';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  ELEMENT_DATA: RegisterModel.EmpListData[] = [];
  displayedColumns: string[] = ['id', 'role', 'firstName', 'lastName', 'email', 'details'];
  dataSource = new MatTableDataSource<RegisterModel.EmpListData>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
              private webService: WebService,
              private registerService: RegisterService
              ) { }

  ngOnInit() {
    this.registerService.getUser().subscribe((data: RegisterModel.EmpListData[]) => {
      console.log('list data = ', data);
      // if (data.role === 1) {
      //   data.role = 'Admin';
      // } else {
      //   data.role = 'User';
      // }
      this.dataSource = new MatTableDataSource(data);
      if (this.sort && this.paginator) {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
      console.log('list data = ', this.dataSource);
    });

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
