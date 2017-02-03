import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class ProgressService {
  constructor() { }
  downloadProgress: Subject<any> = new Subject();
  uploadProgress: Subject<any> = new Subject();
}
