/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PaymentCardComponent } from './payment-card.component';
import { PaymentCardService } from './service/payment-card.service';
import { PaymentCardNumberPipe } from './pipe/payment-card-number/payment-card-number.pipe';
import { ValidThruPipe } from './pipe/valid-thru/valid-thru.pipe';
/**
 * Monolithic module that is being bundled and published.
 * Depends only on ReactiveFormsModule and CommonModule.
 */
export class NgPaymentCardModule {
}
NgPaymentCardModule.decorators = [
    { type: NgModule, args: [{
                imports: [ReactiveFormsModule, CommonModule],
                declarations: [PaymentCardComponent, PaymentCardNumberPipe, ValidThruPipe],
                providers: [PaymentCardService],
                exports: [PaymentCardComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcGF5bWVudC1jYXJkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXBheW1lbnQtY2FyZC8iLCJzb3VyY2VzIjpbImxpYi9uZy1wYXltZW50LWNhcmQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUM1RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7Ozs7O0FBWWxFLE1BQU0sT0FBTyxtQkFBbUI7OztZQU4vQixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsWUFBWSxDQUFDO2dCQUM1QyxZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxxQkFBcUIsRUFBRSxhQUFhLENBQUM7Z0JBQzFFLFNBQVMsRUFBRSxDQUFDLGtCQUFrQixDQUFDO2dCQUMvQixPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQzthQUNoQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgUGF5bWVudENhcmRDb21wb25lbnQgfSBmcm9tICcuL3BheW1lbnQtY2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGF5bWVudENhcmRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlL3BheW1lbnQtY2FyZC5zZXJ2aWNlJztcbmltcG9ydCB7IFBheW1lbnRDYXJkTnVtYmVyUGlwZSB9IGZyb20gJy4vcGlwZS9wYXltZW50LWNhcmQtbnVtYmVyL3BheW1lbnQtY2FyZC1udW1iZXIucGlwZSc7XG5pbXBvcnQgeyBWYWxpZFRocnVQaXBlIH0gZnJvbSAnLi9waXBlL3ZhbGlkLXRocnUvdmFsaWQtdGhydS5waXBlJztcblxuLyoqXG4gKiBNb25vbGl0aGljIG1vZHVsZSB0aGF0IGlzIGJlaW5nIGJ1bmRsZWQgYW5kIHB1Ymxpc2hlZC5cbiAqIERlcGVuZHMgb25seSBvbiBSZWFjdGl2ZUZvcm1zTW9kdWxlIGFuZCBDb21tb25Nb2R1bGUuXG4gKi9cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtSZWFjdGl2ZUZvcm1zTW9kdWxlLCBDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtQYXltZW50Q2FyZENvbXBvbmVudCwgUGF5bWVudENhcmROdW1iZXJQaXBlLCBWYWxpZFRocnVQaXBlXSxcbiAgcHJvdmlkZXJzOiBbUGF5bWVudENhcmRTZXJ2aWNlXSxcbiAgZXhwb3J0czogW1BheW1lbnRDYXJkQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgTmdQYXltZW50Q2FyZE1vZHVsZSB7fVxuIl19