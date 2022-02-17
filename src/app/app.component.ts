import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  actualRoute = 'experimentation';

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute

  ) {

  }

  ngOnInit(): void {
      this.router.events
      .pipe(
        filter(e => e instanceof NavigationEnd)
      ).forEach(e => {
        this.actualRoute = this.route.root.firstChild?.snapshot.data['title'];
      })
  }
}
