import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
})
export class FiltersComponent implements OnInit {
  @Output() showCategory = new EventEmitter<string>();
  //categories: string[]  ;
  //categoriesSubscription: Subscription ;

  categories = ['Amigurumi', 'Flower'];

  ngOnInit(): void {
   
  }

  onShowCategory(category: string): void {
    this.showCategory.emit(category);
  }

  /*ngOnDestroy(): void {
    if (this.categoriesSubscription) {
      this.categoriesSubscription.unsubscribe();
    }
  } */
}
