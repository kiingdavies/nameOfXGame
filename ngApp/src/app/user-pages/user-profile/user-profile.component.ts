import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // ( () => {
    //   ("#mdb-lightbox-ui").onLoad("mdb-addons/mdb-lightbox-ui.html");
    // });
  }

  // new WOW().init();

  // MDB Lightbox Init
  // $(function () {
  //   $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
  // });
}
