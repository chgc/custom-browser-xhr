import { Injectable } from '@angular/core';
import { BrowserXhr } from '@angular/http';
import { ProgressService } from './progress.service';

@Injectable()
export class CustomBrowserXhrService extends BrowserXhr {
  constructor(public progress: ProgressService) {
    super();
  }
  build(): any {
    let xhr = super.build();
    xhr.onprogress = (event) => {
      this.progress.downloadProgress.next(event);
    };
    return <any>(xhr);
  }

}
