import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss']
})
export class PokeSearchComponent  {
  @Output() public emitSearch: EventEmitter<String> = new EventEmitter();
  @Output() public emitQuery: EventEmitter<String> = new EventEmitter();
  @Output() public emitQnt: EventEmitter<String> = new EventEmitter();
  public search(value:string) {
    this.emitSearch.emit(value)
  }
  public queryType(value:any,name:any) {
if(value == '') return;
    let data:any = {
      type:String,
      sort:String,
      name:String,
    }
    data.type = value;
    data.sort = '';
    data.name = name;
    this.emitQuery.emit(data);
  }
  public qntSearch(value:string) {

    this.emitQnt.emit(value.toString());
  }
}
