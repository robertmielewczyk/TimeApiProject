import { Component, OnInit } from '@angular/core';
import { TimeapiService } from '../timeapi.service';
import { TIMEZONES } from '../mock-timezones'
import { stringify } from 'querystring';

@Component({
  selector: 'app-timezone',
  templateUrl: './timezone.component.html',
  styleUrls: ['./timezone.component.css']
})
export class TimezoneComponent implements OnInit {
  time: any = "Click button to show current time";
  availabletimezones = TIMEZONES;
  constructor(
    private timeapiService: TimeapiService,
  ) { }

  ngOnInit(): void {
  }

  onSelect(timezone: string): void {
    this.time = this.timeapiService.getCurrentTime(timezone).subscribe(
      data => this.time = data['datetime'].match(/[0-9]{2}:[0-9]{2}:[0-9]{2}/g)
      );
  }
}
