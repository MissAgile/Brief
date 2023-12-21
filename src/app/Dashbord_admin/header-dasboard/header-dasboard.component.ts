import { Component,OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/serviceuser/userservice.service';
@Component({
  selector: 'app-header-dasboard',
  templateUrl: './header-dasboard.component.html',
  styleUrls: ['./header-dasboard.component.css']
})
export class HeaderDasboardComponent implements OnInit {

  constructor(private userService: UserserviceService) {}
  public UserId: any;
  ngOnInit() {
  this.UserId = this.userService.getUserId();
  // Faites ce que vous devez avec l'identifiant récupéré
}
}
