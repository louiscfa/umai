import { Component, OnInit } from '@angular/core';

declare const google: any;

@Component({
  selector: 'app-acces',
  templateUrl: './acces.component.html',
  styleUrls: ['./acces.component.css']
})
export class AccesComponent {
  
  constructor() { }
  
  ngOnInit(): void {
    this.initMap();
  }
  
  initMap() {
    if (typeof google !== 'undefined') {
      const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: { lat: 48.857072, lng: 2.347079 },
        zoom: 16,
      });
      
      const marker = new google.maps.Marker({
        position: { lat: 48.857072, lng: 2.347079 },
        map: map,
        title: "UMAI Restaurant",
      });
    } else {
      setTimeout(() => {
        this.initMap();
      }, 500);
    }
  }
  
}
