"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentGatewayAdapter = exports.NewPaymentGatway = void 0;
exports.TestAdapterPattern = TestAdapterPattern;
// A New Payment Gateway needs to be added which is not compatible with our current
// PaymentGateway
var NewPaymentGatway = /** @class */ (function () {
    function NewPaymentGatway() {
    }
    /**
     * name
     */
    NewPaymentGatway.prototype.makePayment = function (amount) {
        console.log("processing payment with a new Gateway of amount: ", amount);
    };
    return NewPaymentGatway;
}());
exports.NewPaymentGatway = NewPaymentGatway;
var PaymentGatewayAdapter = /** @class */ (function () {
    function PaymentGatewayAdapter(newGateway) {
        this.newPaymentGateway = newGateway;
    }
    // we called the uncompatible makePayment method of new Gateway through this adapter
    PaymentGatewayAdapter.prototype.processPayment = function (amount) {
        this.newPaymentGateway.makePayment(amount);
    };
    return PaymentGatewayAdapter;
}());
exports.PaymentGatewayAdapter = PaymentGatewayAdapter;
function TestAdapterPattern() {
    var newGateway = new NewPaymentGatway();
    var adapter = new PaymentGatewayAdapter(newGateway);
    adapter.processPayment(500);
}
