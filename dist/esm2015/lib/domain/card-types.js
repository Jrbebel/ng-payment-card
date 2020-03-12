/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CardType } from './card-type.enum';
/** @type {?} */
const CARD_TYPES = new Map();
CARD_TYPES.set(CardType.AMERICAN_EXPRESS, new RegExp('^3[47]'));
CARD_TYPES.set(CardType.DINERS, new RegExp('^36'));
CARD_TYPES.set(CardType.DINERS_CARTE_BLANCHE, new RegExp('^30[0-5]'));
CARD_TYPES.set(CardType.DISCOVER_CLUB, new RegExp('^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)'));
CARD_TYPES.set(CardType.CHINA_UNIONPAY, new RegExp('^(62[0-9]{14,17})$'));
CARD_TYPES.set(CardType.JCB, new RegExp('^35(2[89]|[3-8][0-9])'));
CARD_TYPES.set(CardType.LASER, new RegExp('^(6304|6706|6709|6771)[0-9]{12,15}$'));
CARD_TYPES.set(CardType.MAESTRO, new RegExp('^(50|5[6-8]|6)[0-9]{12,19}$'));
CARD_TYPES.set(CardType.MASTERCARD, new RegExp('^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$'));
CARD_TYPES.set(CardType.VISA_ELECTRON, new RegExp('^(4026|417500|4508|4844|491([37]))'));
CARD_TYPES.set(CardType.VISA, new RegExp('^4'));
export default CARD_TYPES;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC10eXBlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXBheW1lbnQtY2FyZC8iLCJzb3VyY2VzIjpbImxpYi9kb21haW4vY2FyZC10eXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztNQUV0QyxVQUFVLEdBQXdCLElBQUksR0FBRyxFQUFFO0FBQ2pELFVBQVUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFDaEUsVUFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDbkQsVUFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztBQUN0RSxVQUFVLENBQUMsR0FBRyxDQUNaLFFBQVEsQ0FBQyxhQUFhLEVBQ3RCLElBQUksTUFBTSxDQUFDLCtFQUErRSxDQUFDLENBQzVGLENBQUM7QUFDRixVQUFVLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsSUFBSSxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO0FBQzFFLFVBQVUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxJQUFJLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7QUFDbEUsVUFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksTUFBTSxDQUFDLHFDQUFxQyxDQUFDLENBQUMsQ0FBQztBQUNsRixVQUFVLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxNQUFNLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxDQUFDO0FBQzVFLFVBQVUsQ0FBQyxHQUFHLENBQ1osUUFBUSxDQUFDLFVBQVUsRUFDbkIsSUFBSSxNQUFNLENBQUMscUdBQXFHLENBQUMsQ0FDbEgsQ0FBQztBQUNGLFVBQVUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxJQUFJLE1BQU0sQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDLENBQUM7QUFDekYsVUFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFFaEQsZUFBZSxVQUFVLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkVHlwZSB9IGZyb20gJy4vY2FyZC10eXBlLmVudW0nO1xuXG5jb25zdCBDQVJEX1RZUEVTOiBNYXA8c3RyaW5nLCBSZWdFeHA+ID0gbmV3IE1hcCgpO1xuQ0FSRF9UWVBFUy5zZXQoQ2FyZFR5cGUuQU1FUklDQU5fRVhQUkVTUywgbmV3IFJlZ0V4cCgnXjNbNDddJykpO1xuQ0FSRF9UWVBFUy5zZXQoQ2FyZFR5cGUuRElORVJTLCBuZXcgUmVnRXhwKCdeMzYnKSk7XG5DQVJEX1RZUEVTLnNldChDYXJkVHlwZS5ESU5FUlNfQ0FSVEVfQkxBTkNIRSwgbmV3IFJlZ0V4cCgnXjMwWzAtNV0nKSk7XG5DQVJEX1RZUEVTLnNldChcbiAgQ2FyZFR5cGUuRElTQ09WRVJfQ0xVQixcbiAgbmV3IFJlZ0V4cCgnXig2MDExfDYyMigxMls2LTldfDFbMy05XVswLTldfFsyLThdWzAtOV17Mn18OVswLTFdWzAtOV18OTJbMC01XXw2NFs0LTldKXw2NSknKVxuKTtcbkNBUkRfVFlQRVMuc2V0KENhcmRUeXBlLkNISU5BX1VOSU9OUEFZLCBuZXcgUmVnRXhwKCdeKDYyWzAtOV17MTQsMTd9KSQnKSk7XG5DQVJEX1RZUEVTLnNldChDYXJkVHlwZS5KQ0IsIG5ldyBSZWdFeHAoJ14zNSgyWzg5XXxbMy04XVswLTldKScpKTtcbkNBUkRfVFlQRVMuc2V0KENhcmRUeXBlLkxBU0VSLCBuZXcgUmVnRXhwKCdeKDYzMDR8NjcwNnw2NzA5fDY3NzEpWzAtOV17MTIsMTV9JCcpKTtcbkNBUkRfVFlQRVMuc2V0KENhcmRUeXBlLk1BRVNUUk8sIG5ldyBSZWdFeHAoJ14oNTB8NVs2LThdfDYpWzAtOV17MTIsMTl9JCcpKTtcbkNBUkRfVFlQRVMuc2V0KFxuICBDYXJkVHlwZS5NQVNURVJDQVJELFxuICBuZXcgUmVnRXhwKCdeKDVbMS01XVswLTldezE0fXwyKDIyWzEtOV1bMC05XXsxMn18MlszLTldWzAtOV17MTN9fFszLTZdWzAtOV17MTR9fDdbMC0xXVswLTldezEzfXw3MjBbMC05XXsxMn0pKSQnKVxuKTtcbkNBUkRfVFlQRVMuc2V0KENhcmRUeXBlLlZJU0FfRUxFQ1RST04sIG5ldyBSZWdFeHAoJ14oNDAyNnw0MTc1MDB8NDUwOHw0ODQ0fDQ5MShbMzddKSknKSk7XG5DQVJEX1RZUEVTLnNldChDYXJkVHlwZS5WSVNBLCBuZXcgUmVnRXhwKCdeNCcpKTtcblxuZXhwb3J0IGRlZmF1bHQgQ0FSRF9UWVBFUztcbmV4cG9ydCB0eXBlIENhcmRUeXBlc0NvbnRhaW5lciA9IHR5cGVvZiBDQVJEX1RZUEVTO1xuIl19