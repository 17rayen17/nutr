import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CrudnutristionistService } from 'src/app/services/crudnutristionist.service';
import { AddClientComponent } from '../add-client/add-client.component';

@Component({
  selector: 'app-dhash-add-patient',
  templateUrl: './dhash-add-patient.component.html',
  styleUrls: ['./dhash-add-patient.component.css']
})
export class DhashAddPatientComponent implements OnInit{

  displayedColumns: string[] = ['id',
    'email', 'phone','Gender','action'];

  dataSources!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(public dialog: MatDialog,private patient:CrudnutristionistService,private route:Router) { }

  ngOnInit(): void {
    this.getDATA()
  }

  getDATA() {
    this.patient.getpatient().subscribe({
      next: (res: any) => {
        // console.log(res)
        this.dataSources = new MatTableDataSource(res)
        this.dataSources.sort = this.sort
        this.dataSources.paginator=this.paginator
      },
      error:(err)=> console.log(err)
    })
  }

  onadd() {
    const dialogRef = this.dialog.open(AddClientComponent)
    dialogRef.afterClosed().subscribe(val => {
      this.getDATA()
    })

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSources.filter = filterValue.trim().toLowerCase();

    if (this.dataSources.paginator) {
      this.dataSources.paginator.firstPage();
    }
  }

  ondelete(id : number) {
    this.patient.deletepatient(id).subscribe(res => {
      this.getDATA()
    }, err => {
      console.log(err)
    })
  }

  onedit(data: any) {
    const dialogRef = this.dialog.open(AddClientComponent, {
      data,
    })
    dialogRef.afterClosed().subscribe(res => {
      this.getDATA()
    })
  }


}
