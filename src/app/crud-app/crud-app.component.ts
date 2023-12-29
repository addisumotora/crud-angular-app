import { Component } from '@angular/core';
import { CrudAppService } from './crud-app.service';

@Component({
  selector: 'app-crud-app',
  templateUrl: './crud-app.component.html',
  styleUrls: ['./crud-app.component.css']
})
export class CrudAppComponent {
  constructor(private crudAppService: CrudAppService){}

}
