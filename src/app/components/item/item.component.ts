import { Component, Input, OnInit } from '@angular/core';
import Item from 'src/app/wrappers/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item: Item = new Item('', '', 'not started', '', [], '');

  constructor() { }

  ngOnInit(): void {
  }

}
