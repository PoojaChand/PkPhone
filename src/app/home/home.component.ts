import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../phone.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  mobile: any;
  phoneService: any;

  constructor(private route: Router, private service: PhoneService) { }

  ngOnInit(): void {
    this.getPhone();
  }
  
  getPhone() {
    this.service.getPhonelist("assets/phonelist.json").subscribe(data=>
      {
        console.log(data);
        this.mobile=data.phonedetails;
      }
      );
  }

  getItem(item) {
    this.route.navigateByUrl("detail", { state: {details: item}});
  }
}