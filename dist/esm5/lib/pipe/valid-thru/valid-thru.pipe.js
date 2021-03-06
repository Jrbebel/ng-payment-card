/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var ValidThruPipe = /** @class */ (function () {
    function ValidThruPipe() {
    }
    /**
     * Transform month and year into card format
     */
    /**
     * Transform month and year into card format
     * @param {?} value
     * @return {?}
     */
    ValidThruPipe.prototype.transform = /**
     * Transform month and year into card format
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value && value.length === 7 ? value.substr(0, 3) + value.substr(5) : '/';
    };
    ValidThruPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'validThru',
                },] }
    ];
    return ValidThruPipe;
}());
export { ValidThruPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWQtdGhydS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcGF5bWVudC1jYXJkLyIsInNvdXJjZXMiOlsibGliL3BpcGUvdmFsaWQtdGhydS92YWxpZC10aHJ1LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBEO0lBQUE7SUFVQSxDQUFDO0lBTkM7O09BRUc7Ozs7OztJQUNJLGlDQUFTOzs7OztJQUFoQixVQUFpQixLQUFhO1FBQzVCLE9BQU8sS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDbEYsQ0FBQzs7Z0JBVEYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxXQUFXO2lCQUNsQjs7SUFRRCxvQkFBQztDQUFBLEFBVkQsSUFVQztTQVBZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ3ZhbGlkVGhydScsXG59KVxuZXhwb3J0IGNsYXNzIFZhbGlkVGhydVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgLyoqXG4gICAqIFRyYW5zZm9ybSBtb250aCBhbmQgeWVhciBpbnRvIGNhcmQgZm9ybWF0XG4gICAqL1xuICBwdWJsaWMgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS5sZW5ndGggPT09IDcgPyB2YWx1ZS5zdWJzdHIoMCwgMykgKyB2YWx1ZS5zdWJzdHIoNSkgOiAnLyc7XG4gIH1cbn1cbiJdfQ==