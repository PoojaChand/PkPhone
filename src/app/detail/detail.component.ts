import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../phone.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  mobile: any;
  

  constructor(private service: PhoneService,private route: Router) { }

  ngOnInit(): void {
    console.log(window.history.state);
    let dlt=window.history.state.details;
    if(dlt && dlt.id) { 
      this.getPhone(dlt.id);
    } else {
      this.route.navigateByUrl("home");
    }
  }
    
  getPhone(id) {
     // this.service.getPhonelist("assets/"+url+".id").subscribe(data=>
    this.service.getPhonelist("assets/"+id+".json").subscribe(data=>
      {
        console.log(data);
        this.mobile=data;
      }
      );
  }

}