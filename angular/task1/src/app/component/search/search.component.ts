import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {

  constructor() { }
  title = 'task1';
  content: string = " ";
  value: string = " ";
  search() {
    this.content = this.value
  }
  onInput(event) {
    this.value = event.target.value
  }

  @Input() Search;

}
