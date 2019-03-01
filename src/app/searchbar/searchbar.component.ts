import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  search = new FormControl('', [Validators.minLength(2)])

  @Output() searchEvent = new EventEmitter<string>();

  constructor(/*private tvDb: TvDb*/) { }

  ngOnInit() {
    this.search.valueChanges.pipe(debounceTime(1000)).subscribe((searchValue: string) => {
      if (!this.search.invalid){
        this.searchEvent.emit(searchValue)
      }
    }
    )
  }
}
