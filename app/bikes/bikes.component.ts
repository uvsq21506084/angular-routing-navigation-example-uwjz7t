
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bike } from '../bike';
import { BikeService } from '../bike.service';
 
@Component({
  selector: 'bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.scss']
})
export class BikeComponent implements OnInit {
 
  bikes: Bike[];
  selectedBike: Bike;
  
  constructor(private router: Router, private bikeService: BikeService) {
 
  }
 
  ngOnInit() {
    this.bikeService.getBikes().then(bikes => this.bikes = bikes);
  }
 
  showInfo(bike: Bike): void {
    this.selectedBike = bike;
    this.router.navigate(['/information', this.selectedBike.id]);
  }
}

