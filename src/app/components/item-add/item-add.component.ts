import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import Item from 'src/app/wrappers/item';
import Part from 'src/app/wrappers/part';

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.scss']
})
export class ItemAddComponent implements OnInit {
  authors: string[] = [];
  translators: string[] = [];
  item: Item = new Item('', '', 'not started', '', [], '');

  title: string = '';

  constructor(
    public modal: NgbActiveModal
  ) { }

  ngOnInit(): void { }

  addPart() {
    this.item.parts.push(new Part(this.item.parts.length + 1, '', 'not started'));
  }
}
