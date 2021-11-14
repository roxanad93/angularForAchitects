import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  cartItemsCount = 0;
  shoppingCartSub: Subscription = new Subscription();

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnDestroy(): void {
    this.shoppingCartSub.unsubscribe();
  }

  ngOnInit(): void {
    this.shoppingCartSub =
      this.shoppingCartService.shoppingCartChanged$.subscribe(
        (data) => (this.cartItemsCount = data as number)
      );
  }
}
