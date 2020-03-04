var AccountStatus;

(function (AccountStatus) {
    AccountStatus[AccountStatus["Paid"] = 0] = "Paid";
    AccountStatus[AccountStatus["Overdue"] = 1] = "Overdue";
    AccountStatus[AccountStatus["Disabled"] = 2] = "Disabled";
})(AccountStatus || (AccountStatus = {}));

var SubscriptionConstants = /** @class */ (function () {
    function SubscriptionConstants() {
        this.SubscriptionFee = 4.00;
        this.OneOffSurcharge = 1.00;
    }
    return SubscriptionConstants;
}());

var Customer = /** @class */ (function () {
    function Customer(value) {
        this.name = value;
    }
   
    Customer.prototype.SubscriptionStarted = function (startDate) {
        this.StartDate = startDate;
    };
    Customer.prototype.OneOffPaymentReceived = function (date, amount) {
        this.SubscriptionStarted(date);
    };
    Customer.prototype.RecurringPaymentReceived = function (date, amount) {
        //
    };
    Customer.prototype.CalculateAccountStatus = function (date) {
        //Just an indication
        this.StartDate = date; 
        this.AccountStatus = 0;
    };
    return Customer;
}());

var program = /** @class */ (function () {
    function program() {
        this.c = new Customer('Phani');
        this.constants = new SubscriptionConstants();
        this.c.SubscriptionStarted(new Date("2016-03-01"));
        this.c.OneOffPaymentReceived(new Date("2016-03-01"), 9.00);
        this.c.RecurringPaymentReceived(new Date("2016-06-15"), this.constants.SubscriptionFee);
        this.c.CalculateAccountStatus(new Date("2016-07-31"));
        
        console.log("Account status of " + this.c.name + " is " + JSON.stringify(AccountStatus));
    }
    return program;
}());


program();