import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import * as Model from './model/employee-list.model';
import { WebService } from '../services/web.service';

export interface PeriodicElement {
  providerId: number;
  firstName: string;
  lastName: number;
  email: string;
}

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  // ELEMENT_DATA: Model.PeriodicElement[] = [];
  ELEMENT_DATA: PeriodicElement[] = [
    {providerId: 1, firstName: 'Hydrogen', lastName: 1.0079, email: 'H'},
    {providerId: 2, firstName: 'Helium', lastName: 4.0026, email: 'He'},
    {providerId: 3, firstName: 'Lithium', lastName: 6.941, email: 'Li'},
    {providerId: 4, firstName: 'Beryllium', lastName: 9.0122, email: 'Be'},
    {providerId: 5, firstName: 'Boron', lastName: 10.811, email: 'B'},
    {providerId: 6, firstName: 'Carbon', lastName: 12.0107, email: 'C'},
    {providerId: 7, firstName: 'Nitrogen', lastName: 14.0067, email: 'N'},
    {providerId: 8, firstName: 'Oxygen', lastName: 15.9994, email: 'O'},
    {providerId: 9, firstName: 'Fluorine', lastName: 18.9984, email: 'F'},
    {providerId: 10, firstName: 'Neon', lastName: 20.1797, email: 'Ne'},
    {providerId: 11, firstName: 'Sodium', lastName: 22.9897, email: 'Na'},
    {providerId: 12, firstName: 'Magnesium', lastName: 24.305, email: 'Mg'},
    {providerId: 13, firstName: 'Aluminum', lastName: 26.9815, email: 'Al'},
    {providerId: 14, firstName: 'Silicon', lastName: 28.0855, email: 'Si'},
    {providerId: 15, firstName: 'Phosphorus', lastName: 30.9738, email: 'P'},
    {providerId: 16, firstName: 'Sulfur', lastName: 32.065, email: 'S'},
    {providerId: 17, firstName: 'Chlorine', lastName: 35.453, email: 'Cl'},
    {providerId: 18, firstName: 'Argon', lastName: 39.948, email: 'Ar'},
    {providerId: 19, firstName: 'Potassium', lastName: 39.0983, email: 'K'},
    {providerId: 20, firstName: 'Calcium', lastName: 40.078, email: 'Ca'},
  ];
  displayedColumns: string[] = ['providerId', 'firstName', 'lastName', 'email'];
  // dataSource: any[] = [];
  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private webService: WebService) { }

  // @ViewChild(MatPaginator) paginator: MatPaginator;


  ngOnInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
    // this.webService.getRequest('/listData', null).subscribe((data: Model.PeriodicElement[]) => {
    //   // this.ELEMENT_DATA = data;
    //   this.dataSource = data;
    //   console.log('list data = ', this.dataSource);
    // });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
