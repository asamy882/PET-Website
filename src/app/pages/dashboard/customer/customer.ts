import { Lookup } from './../../../shared/model/lookup.model';
export class Customer {
    CODE: string;
    NAME: string;
    CountryId: number;
    CompanyAddress: string;
    Logo: string;
    Responsible: string;
    HasPrivatePage: boolean;
    CreditPeriod: number;
    CreditLimit: number;
    PETGuarantee: number;
    CustomerGuarantee: number;
    DownPayment: number;
    DownPaymentPercentage: number;
    ImporterPaymentMethod: number;
    AreaCode: string;
    RegNo: string;
    FileNo: string;
    JoiningDate: Date;
    EnablePurchaseOrderUpload: boolean;
    PurchaseOrderRequired: boolean;
    EnableContainersInOrder: boolean;
    Configured: boolean;
    Status: boolean;
    Country: Lookup;
    Currency: Lookup;
    CustomerType: Lookup;
    Group1: Lookup;
    Group2: Lookup;
    Group3: Lookup;
    PaymentMethod: Lookup;
        //  Salesman : {
        //    Code :  string ;
        //    NAME :  string ;
        //    Email :  string ;
        //    UserId : 0;
        //    Configured : true
        // };
        //  CustomerDeliveryAddresses : [
        //   {
        //      ID : 0;
        //      CODE :  string ;
        //      DeliveryAddress :  string
        //   }
        // ];
        //  CustomerSpecialPrices : [
        //   {
        //      ID : 0;
        //      ProductCode :  string ;
        //      CustomerCode :  string ;
        //      Price : 0
        //   }
        // ];
        //  CustomerUsers : [
   /*       {
    UserId: 0;
    UserName: string;
    Password: string;
    DisplayName: string;
    Email: string;
    IsApproved: true;
    IsActive: true;
    LastLoginDate: 2018 - 10 - 24T13: 13: 13.891Z;
    CustomerCode: string;
    Roles: [
        {
            RoleId: 0;
            RoleName: string ;
            IsSystemRole: true
        }
    ]
}
        ]*/
}
