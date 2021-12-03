import { Component, OnInit } from '@angular/core';
import { TData } from '../interfaces/data';
import * as json_data from '../info_assets/data.json';

@Component({
  selector: 'app-collapse-rows',
  templateUrl: './collapse-rows.component.html',
  styleUrls: ['./collapse-rows.component.css']
})
export class CollapseRowsComponent implements OnInit {

  public customerList: { ID: string, Name: string, Email: string, Address: string, Phone: Number, Expandable: boolean }[] = json_data;

  data: TData[];

  constructor() { }

  ngOnInit() {
    this.data = [
      {
        ID: "A001",
        Name: "Mandar",
        Email: "Mandar@kumowiz.com",
        Address: "Pune City, Maharashtra",
        Phone: 1234567890,
        Expandable: false
      },
      {
        ID: "A002",
        Name: "Naresh",
        Email: "Naresh@kumowiz.com",
        Address: "Pune City, Maharashtra",
        Phone: 1234567890,
        Expandable: false
      },
      {
        ID: "A003",
        Name: "Siddesh",
        Email: "Siddesh@kumowiz.com",
        Address: "Pune City, Maharashtra",
        Phone: 1234567890,
        Expandable: false
      },
      {
        ID: "A004",
        Name: "Ram",
        Email: "Ram@kumowiz.com",
        Address: "Pune City, Maharashtra",
        Phone: 1234567890,
        Expandable: false
      },
      {
        ID: "A005",
        Name: "Sham",
        Email: "Ram@kumowiz.com",
        Address: "Pune City, Maharashtra",
        Phone: 1234567890,
        Expandable: false
      },
      {
        ID: "A006",
        Name: "Alan",
        Email: "Ram@kumowiz.com",
        Address: "Pune City, Maharashtra",
        Phone: 1234567890,
        Expandable: false
      },
      {
        ID: "A007",
        Name: "Harry",
        Email: "Ram@kumowiz.com",
        Address: "Pune City, Maharashtra",
        Phone: 1234567890,
        Expandable: false
      },
      {
        ID: "A008",
        Name: "Amar",
        Email: "Ram@kumowiz.com",
        Address: "Pune City, Maharashtra",
        Phone: 1234567890,
        Expandable: false
      },
      {
        ID: "A009",
        Name: "Kirti",
        Email: "Ram@kumowiz.com",
        Address: "Pune City, Maharashtra",
        Phone: 1234567890,
        Expandable: false
      },
      {
        ID: "A010",
        Name: "Sneha",
        Email: "Ram@kumowiz.com",
        Address: "Pune City, Maharashtra",
        Phone: 1234567890,
        Expandable: false
      }
    ];
  }

  toggleOn(ID: string) {
    console.log("ID is:", ID)
    for (let row of this.data) {
      if (row.ID == ID) {
        if (row.Expandable == false)
          (
            row.Expandable = true
          )
        else {
          row.Expandable = false
        }
      }
      else {
        row.Expandable = false
      }
    }
  }

}
