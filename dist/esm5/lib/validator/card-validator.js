/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Collection of validation methods
 */
var CardValidator = /** @class */ (function () {
    function CardValidator() {
    }
    /**
     * Check if control contains numbers only
     */
    /**
     * Check if control contains numbers only
     * @param {?} abstractCtrl
     * @return {?}
     */
    CardValidator.numbersOnly = /**
     * Check if control contains numbers only
     * @param {?} abstractCtrl
     * @return {?}
     */
    function (abstractCtrl) {
        /** @type {?} */
        var ccNum = abstractCtrl.value;
        /** @type {?} */
        var NUMBERS_ONLY = new RegExp(/^[0-9]+$/);
        return !NUMBERS_ONLY.test(ccNum) ? CardValidator.NUMBERS_ONLY_ERR : null;
    };
    /**
     * Check checksum number in card number using Luhn algorithm
     */
    /**
     * Check checksum number in card number using Luhn algorithm
     * @param {?} abstractCtr
     * @return {?}
     */
    CardValidator.checksum = /**
     * Check checksum number in card number using Luhn algorithm
     * @param {?} abstractCtr
     * @return {?}
     */
    function (abstractCtr) {
        /** @type {?} */
        var ccNumber = abstractCtr.value;
        /** @type {?} */
        var luhnArray = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];
        /** @type {?} */
        var length = ccNumber ? ccNumber.length : 0;
        /** @type {?} */
        var sum = 0;
        /** @type {?} */
        var shouldMultiply = true;
        while (length) {
            /** @type {?} */
            var val = parseInt(ccNumber.charAt(--length), 10);
            sum += (shouldMultiply = !shouldMultiply) ? luhnArray[val] : val;
        }
        return !(sum && sum % 10 === 0) ? CardValidator.CHECKSUM_INVALID : null;
    };
    /**
     * Check validity of the card
     */
    /**
     * Check validity of the card
     * @param {?} formGroup
     * @return {?}
     */
    CardValidator.expiration = /**
     * Check validity of the card
     * @param {?} formGroup
     * @return {?}
     */
    function (formGroup) {
        /** @type {?} */
        var expirationMonth = Number(formGroup.get('expirationMonth').value);
        /** @type {?} */
        var expirationYear = Number(formGroup.get('expirationYear').value);
        /** @type {?} */
        var expirationDate = new Date(expirationYear, expirationMonth + 1, 0);
        return new Date().getTime() > expirationDate.getTime() ? CardValidator.CARD_EXPIRED : null;
    };
    /**
     * Custom error for alphanumeric input
     */
    CardValidator.NUMBERS_ONLY_ERR = {
        numbersOnly: true,
    };
    /**
     * Custom error for invalid checksum
     */
    CardValidator.CHECKSUM_INVALID = {
        checksum: true,
    };
    /**
     * Custom error for expired card
     */
    CardValidator.CARD_EXPIRED = {
        expiration: true,
    };
    return CardValidator;
}());
export { CardValidator };
if (false) {
    /**
     * Custom error for alphanumeric input
     * @type {?}
     * @private
     */
    CardValidator.NUMBERS_ONLY_ERR;
    /**
     * Custom error for invalid checksum
     * @type {?}
     * @private
     */
    CardValidator.CHECKSUM_INVALID;
    /**
     * Custom error for expired card
     * @type {?}
     * @private
     */
    CardValidator.CARD_EXPIRED;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC12YWxpZGF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1wYXltZW50LWNhcmQvIiwic291cmNlcyI6WyJsaWIvdmFsaWRhdG9yL2NhcmQtdmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQTtJQUFBO0lBeURBLENBQUM7SUFuQ0M7O09BRUc7Ozs7OztJQUNXLHlCQUFXOzs7OztJQUF6QixVQUEwQixZQUE2Qjs7WUFDL0MsS0FBSyxHQUFXLFlBQVksQ0FBQyxLQUFLOztZQUNsQyxZQUFZLEdBQVcsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ25ELE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUMzRSxDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUNXLHNCQUFROzs7OztJQUF0QixVQUF1QixXQUE0Qjs7WUFDM0MsUUFBUSxHQUFXLFdBQVcsQ0FBQyxLQUFLOztZQUNwQyxTQUFTLEdBQWtCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDOztZQUMzRCxNQUFNLEdBQVcsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDOztZQUMvQyxHQUFHLEdBQUcsQ0FBQzs7WUFDUCxjQUFjLEdBQUcsSUFBSTtRQUV6QixPQUFPLE1BQU0sRUFBRTs7Z0JBQ1AsR0FBRyxHQUFXLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzNELEdBQUcsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztTQUNsRTtRQUNELE9BQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUMxRSxDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUNXLHdCQUFVOzs7OztJQUF4QixVQUF5QixTQUFvQjs7WUFDckMsZUFBZSxHQUFXLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsS0FBSyxDQUFDOztZQUN4RSxjQUFjLEdBQVcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxLQUFLLENBQUM7O1lBQ3RFLGNBQWMsR0FBUyxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsZUFBZSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDN0UsT0FBTyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzdGLENBQUM7Ozs7SUFwRGMsOEJBQWdCLEdBQXFCO1FBQ2xELFdBQVcsRUFBRSxJQUFJO0tBQ2xCLENBQUM7Ozs7SUFLYSw4QkFBZ0IsR0FBcUI7UUFDbEQsUUFBUSxFQUFFLElBQUk7S0FDZixDQUFDOzs7O0lBS2EsMEJBQVksR0FBcUI7UUFDOUMsVUFBVSxFQUFFLElBQUk7S0FDakIsQ0FBQztJQXFDSixvQkFBQztDQUFBLEFBekRELElBeURDO1NBekRZLGFBQWE7Ozs7Ozs7SUFJeEIsK0JBRUU7Ozs7OztJQUtGLCtCQUVFOzs7Ozs7SUFLRiwyQkFFRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgRm9ybUdyb3VwLCBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKipcbiAqIENvbGxlY3Rpb24gb2YgdmFsaWRhdGlvbiBtZXRob2RzXG4gKi9cbmV4cG9ydCBjbGFzcyBDYXJkVmFsaWRhdG9yIHtcbiAgLyoqXG4gICAqIEN1c3RvbSBlcnJvciBmb3IgYWxwaGFudW1lcmljIGlucHV0XG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBOVU1CRVJTX09OTFlfRVJSOiBWYWxpZGF0aW9uRXJyb3JzID0ge1xuICAgIG51bWJlcnNPbmx5OiB0cnVlLFxuICB9O1xuXG4gIC8qKlxuICAgKiBDdXN0b20gZXJyb3IgZm9yIGludmFsaWQgY2hlY2tzdW1cbiAgICovXG4gIHByaXZhdGUgc3RhdGljIENIRUNLU1VNX0lOVkFMSUQ6IFZhbGlkYXRpb25FcnJvcnMgPSB7XG4gICAgY2hlY2tzdW06IHRydWUsXG4gIH07XG5cbiAgLyoqXG4gICAqIEN1c3RvbSBlcnJvciBmb3IgZXhwaXJlZCBjYXJkXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBDQVJEX0VYUElSRUQ6IFZhbGlkYXRpb25FcnJvcnMgPSB7XG4gICAgZXhwaXJhdGlvbjogdHJ1ZSxcbiAgfTtcblxuICAvKipcbiAgICogQ2hlY2sgaWYgY29udHJvbCBjb250YWlucyBudW1iZXJzIG9ubHlcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgbnVtYmVyc09ubHkoYWJzdHJhY3RDdHJsOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgY29uc3QgY2NOdW06IHN0cmluZyA9IGFic3RyYWN0Q3RybC52YWx1ZTtcbiAgICBjb25zdCBOVU1CRVJTX09OTFk6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoL15bMC05XSskLyk7XG4gICAgcmV0dXJuICFOVU1CRVJTX09OTFkudGVzdChjY051bSkgPyBDYXJkVmFsaWRhdG9yLk5VTUJFUlNfT05MWV9FUlIgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGNoZWNrc3VtIG51bWJlciBpbiBjYXJkIG51bWJlciB1c2luZyBMdWhuIGFsZ29yaXRobVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBjaGVja3N1bShhYnN0cmFjdEN0cjogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgIGNvbnN0IGNjTnVtYmVyOiBzdHJpbmcgPSBhYnN0cmFjdEN0ci52YWx1ZTtcbiAgICBjb25zdCBsdWhuQXJyYXk6IEFycmF5PG51bWJlcj4gPSBbMCwgMiwgNCwgNiwgOCwgMSwgMywgNSwgNywgOV07XG4gICAgbGV0IGxlbmd0aDogbnVtYmVyID0gY2NOdW1iZXIgPyBjY051bWJlci5sZW5ndGggOiAwO1xuICAgIGxldCBzdW0gPSAwO1xuICAgIGxldCBzaG91bGRNdWx0aXBseSA9IHRydWU7XG5cbiAgICB3aGlsZSAobGVuZ3RoKSB7XG4gICAgICBjb25zdCB2YWw6IG51bWJlciA9IHBhcnNlSW50KGNjTnVtYmVyLmNoYXJBdCgtLWxlbmd0aCksIDEwKTtcbiAgICAgIHN1bSArPSAoc2hvdWxkTXVsdGlwbHkgPSAhc2hvdWxkTXVsdGlwbHkpID8gbHVobkFycmF5W3ZhbF0gOiB2YWw7XG4gICAgfVxuICAgIHJldHVybiAhKHN1bSAmJiBzdW0gJSAxMCA9PT0gMCkgPyBDYXJkVmFsaWRhdG9yLkNIRUNLU1VNX0lOVkFMSUQgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHZhbGlkaXR5IG9mIHRoZSBjYXJkXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGV4cGlyYXRpb24oZm9ybUdyb3VwOiBGb3JtR3JvdXApOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgY29uc3QgZXhwaXJhdGlvbk1vbnRoOiBudW1iZXIgPSBOdW1iZXIoZm9ybUdyb3VwLmdldCgnZXhwaXJhdGlvbk1vbnRoJykudmFsdWUpO1xuICAgIGNvbnN0IGV4cGlyYXRpb25ZZWFyOiBudW1iZXIgPSBOdW1iZXIoZm9ybUdyb3VwLmdldCgnZXhwaXJhdGlvblllYXInKS52YWx1ZSk7XG4gICAgY29uc3QgZXhwaXJhdGlvbkRhdGU6IERhdGUgPSBuZXcgRGF0ZShleHBpcmF0aW9uWWVhciwgZXhwaXJhdGlvbk1vbnRoICsgMSwgMCk7XG4gICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpID4gZXhwaXJhdGlvbkRhdGUuZ2V0VGltZSgpID8gQ2FyZFZhbGlkYXRvci5DQVJEX0VYUElSRUQgOiBudWxsO1xuICB9XG59XG4iXX0=