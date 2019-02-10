import {filter} from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  styleUrls:['./header.component.css'],
  selector: 'abe-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  title ='7 Minute Workout';
  private showHistoryLink = true;
  private showHomeLink=true;
  constructor(private router: Router) {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        this.showHistoryLink = true;//!e.url.startsWith('/workout');
        this.showHomeLink=e.url!='/'&&e.url!='/start';
      });
  }

  ngOnInit() {
  }

}
