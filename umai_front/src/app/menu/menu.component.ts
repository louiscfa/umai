import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../services/menu/menu.service';
import { Menu } from '../interface/menu/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  menuId: any
  menus: any = []

  constructor(private activeRoute: ActivatedRoute, private menuService: MenuService) { }

  ngOnInit() {
    this.refreshMenus();
  }

 public refreshMenus(){
    this.menuId = this.activeRoute.snapshot.paramMap.get('id');
    console.log("refresh");
    if (this.menuId > 0) {
      this.menuService.getCategoryMenus(this.menuId).subscribe(data => {
        this.menus = data;
      });
    } else {
      this.menus = this.menuService.getAllMenus().subscribe(data => {
        this.menus = data;
      });
    }
  }
}
