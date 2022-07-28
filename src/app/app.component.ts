import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ItemAddComponent } from './components/item-add/item-add.component';
import Library from './wrappers/library';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dragonfly';

  storageKey = 'library';
  library: Library = new Library([]);
  
  constructor(
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.getLibraryFromStorage();
  }

  getLibraryFromStorage() {
    const storageLibrary = localStorage.getItem(this.storageKey);
    if (storageLibrary) {
      this.library = JSON.parse(storageLibrary);
    }
  }
  setLibraryInStorage() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.library));
  }

  import(event: any) {
    if (event.target?.files) {
      const importFile = event.target.files[0];
      const fileReader = new FileReader();
      fileReader.onload = () => processImportFile(fileReader);
      fileReader.readAsText(importFile);

      const processImportFile = (fileReader: FileReader) => {
        if (fileReader.result && typeof fileReader.result === "string") {
          this.library = JSON.parse(fileReader.result);
          this.setLibraryInStorage();
        }
      }
    }
  }
  export() {
    const blob = new Blob([JSON.stringify(this.library)], { type: "application/json" });
    FileSaver.saveAs(blob, "library.json");
  }
  
  addCategory() {

  }
  addCategoryItem(categoryTitle: string) {
    this.modalService.open(ItemAddComponent, {ariaLabelledBy: 'modal-basic-title'}).result.then((item) => {
      const category = this.library.categories.filter(x => x.title === categoryTitle)[0];
      category.items.push(item);
      this.setLibraryInStorage();
    });
  }
  addSubcategory() {

  }
  addSubcategoryItem() {

  }
  
}
