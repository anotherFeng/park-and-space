import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { MapService } from './map.service';

@Component({
  selector: 'bnb-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Input() location: string;
  isPositionError: boolean = false;
  lat: number;
  lng: number;
  constructor(
    private mapService: MapService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
  }

  mapReadyHandler() {
    this.mapService.getGeoLocation(this.location)
      .subscribe((coordinates) => {
        this.lat = coordinates.lat;
        this.lng = coordinates.lng;
        this.changeDetectorRef.detectChanges();
      }, () => {
        this.isPositionError = true;
      });
  }

}
