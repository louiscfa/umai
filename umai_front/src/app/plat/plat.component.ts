import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlatService } from '../services/plat/plat.service';

@Component({
  selector: 'app-plat',
  templateUrl: './plat.component.html',
  styleUrls: ['./plat.component.css']
})
export class PlatComponent {

  plat: any
  platId: any

  constructor(private activeRoute: ActivatedRoute, private platService: PlatService) {

  }

  ngOnInit() {
    this.platId = this.activeRoute.snapshot.paramMap.get('id');
    this.platService.getPlat().subscribe(data => {
      this.plat = data;
    });
  }
}
