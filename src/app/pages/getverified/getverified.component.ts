import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-getverified',
  templateUrl: './getverified.component.html',
  styleUrls: ['./getverified.component.scss']
})
export class GetverifiedComponent implements OnInit {

  constructor(  public authService: AuthService,
    public ngZone: NgZone,private router: Router ) { }

  ngOnInit() {

    }
    
    goToLink(url: string) {
      window.open(url, "_blank");
    }
  
    goToPage(url: string) {
      window.location.href = url;
    }

  }