// Legacy Payment Gateway which is implemented by our current payment gateways
interface PaymentGateway {
  processPayment(amount: number): void;
}

// A New Payment Gateway needs to be added which is not compatible with our current
// PaymentGateway
export class NewPaymentGatway {
  /**
   * name
   */
  public makePayment(amount: number): void {
    console.log("processing payment with a new Gateway of amount: ", amount);
  }
}

export class PaymentGatewayAdapter implements PaymentGateway {
  private newPaymentGateway: NewPaymentGatway;
  constructor(newGateway: NewPaymentGatway) {
    this.newPaymentGateway = newGateway;
  }

  // we called the uncompatible makePayment method of new Gateway through this adapter
  processPayment(amount: number): void {
    this.newPaymentGateway.makePayment(amount);
  }
}

export function TestAdapterPattern(): void {
  const newGateway = new NewPaymentGatway();
  const adapter = new PaymentGatewayAdapter(newGateway);
  adapter.processPayment(500);
}
