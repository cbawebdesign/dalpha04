import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }


  goToLink(url: string) {
    window.open(url, "_blank");
  }

  goToPage(url: string) {
    window.location.href = url;
  }
}
