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
var NgPaymentCardModule = /** @class */ (function () {
    function NgPaymentCardModule() {
    }
    NgPaymentCardModule.decorators = [
        { type: NgModule, args: [{
                    imports: [ReactiveFormsModule, CommonModule],
                    declarations: [PaymentCardComponent, PaymentCardNumberPipe, ValidThruPipe],
                    providers: [PaymentCardService],
                    exports: [PaymentCardComponent],
                },] }
    ];
    return NgPaymentCardModule;
}());
export { NgPaymentCardModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcGF5bWVudC1jYXJkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXBheW1lbnQtY2FyZC8iLCJzb3VyY2VzIjpbImxpYi9uZy1wYXltZW50LWNhcmQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUM1RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7Ozs7O0FBTWxFO0lBQUE7SUFNa0MsQ0FBQzs7Z0JBTmxDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxZQUFZLENBQUM7b0JBQzVDLFlBQVksRUFBRSxDQUFDLG9CQUFvQixFQUFFLHFCQUFxQixFQUFFLGFBQWEsQ0FBQztvQkFDMUUsU0FBUyxFQUFFLENBQUMsa0JBQWtCLENBQUM7b0JBQy9CLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDO2lCQUNoQzs7SUFDaUMsMEJBQUM7Q0FBQSxBQU5uQyxJQU1tQztTQUF0QixtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFBheW1lbnRDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9wYXltZW50LWNhcmQuY29tcG9uZW50JztcbmltcG9ydCB7IFBheW1lbnRDYXJkU2VydmljZSB9IGZyb20gJy4vc2VydmljZS9wYXltZW50LWNhcmQuc2VydmljZSc7XG5pbXBvcnQgeyBQYXltZW50Q2FyZE51bWJlclBpcGUgfSBmcm9tICcuL3BpcGUvcGF5bWVudC1jYXJkLW51bWJlci9wYXltZW50LWNhcmQtbnVtYmVyLnBpcGUnO1xuaW1wb3J0IHsgVmFsaWRUaHJ1UGlwZSB9IGZyb20gJy4vcGlwZS92YWxpZC10aHJ1L3ZhbGlkLXRocnUucGlwZSc7XG5cbi8qKlxuICogTW9ub2xpdGhpYyBtb2R1bGUgdGhhdCBpcyBiZWluZyBidW5kbGVkIGFuZCBwdWJsaXNoZWQuXG4gKiBEZXBlbmRzIG9ubHkgb24gUmVhY3RpdmVGb3Jtc01vZHVsZSBhbmQgQ29tbW9uTW9kdWxlLlxuICovXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUmVhY3RpdmVGb3Jtc01vZHVsZSwgQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbUGF5bWVudENhcmRDb21wb25lbnQsIFBheW1lbnRDYXJkTnVtYmVyUGlwZSwgVmFsaWRUaHJ1UGlwZV0sXG4gIHByb3ZpZGVyczogW1BheW1lbnRDYXJkU2VydmljZV0sXG4gIGV4cG9ydHM6IFtQYXltZW50Q2FyZENvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIE5nUGF5bWVudENhcmRNb2R1bGUge31cbiJdfQ==