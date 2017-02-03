import { Component, OnInit } from '@angular/core';
import { ProgressService } from './progress.service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  items: any[] = [];

  constructor(private progress: ProgressService, private http: Http) {

  }

  ngOnInit() {
    this.getList();
  }

  getList() {
    var subscription = this.progress.downloadProgress.subscribe(event => {
      console.log(event);
    });
    this.http.get('https://jsonplaceholder.typicode.com/photos')
      .map(response => response.json())
      .subscribe(
      data => {
        this.items = data;
      },
      err => { },
      () => {
        subscription.unsubscribe();
      })
  }
}
