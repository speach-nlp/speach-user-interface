import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'user-interface';
  loadingView = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.loadingView = false;
    }, 2000);
  }
}
