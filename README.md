# customerSubscription


Given the following sequence of events,

determine whether each customer's account is 
paid in full, 
in a overdue state, 
disabled.

Customers can make one-off(one time) payments and 
set up recurring (occurring again periodically ) payments.

Billing date is the last day of the month if it falls Monday - Friday, 
otherwise if it falls on a weekend, then the date is the previous Friday.

Accounts are paid in arrears (money that is owed and should have been paid earlier.),
 i.e. if a customer subscribes to the service for January, then their account must be settled by the last day in January 
 (given the above rule).

Accounts over 1 week but less than 2 months in arrears are flagged as warning, 
2 months and over are disabled.

Subscription costs 4.00 a month, 
but there is a 1.00 surcharge for making one-off(one-time) payments.

Customer 1 subscribed in March
1st March one-off payment of 9 - March 4, April 4, 1 surcharge
15th May recurring payment 4
15th June recurring payment 4

Customer 2 subscribed in February
31st March one-off payment of 13, March - 4, 8 balance 
29th April recurring payment, 4
29th May recurring payment, 4
29th June recurring payment, 4

Customer 3 subscribed in January
15th Jan one-off payment of £33

Customer 4 subscribed in July
No payments to date.

Customer 5 subscribed in April
29th April recurring payment
29th May recurring payment

The implementation of these events uses Domain Driven Design and 
uses an Actor or Aggregate Root to update the state of the customer using event handlers. 
State may only be updated using these event handlers. 
Other methods may be implemented which read the current state. 
This separation is loosely based on CQRS(Command Query Responsibility Segregation). 
The implementation has been greatly simplified for this test.

The above events have been modelled for you, 
and a the event handler for the SubscriptionStarted event has been implemented.
All other event handlers throw NotImplementedException and should be implemented. 
Given today is the 31st July, using the On(AccountReconciled ev) event handler, 
update the current account status and balance for each customer.

You may change any code found in the solution apart from the Customer state class which you may only add properties to (if required).
Constants for subscription fee and one-off payment surcharge are found in Core.Entities.SubscriptionConstants.
