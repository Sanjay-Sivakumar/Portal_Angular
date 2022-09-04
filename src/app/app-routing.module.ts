import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CpCreditMemoPageComponent } from './cp-credit-memo-page/cp-credit-memo-page.component';
import { CpDashboardPageComponent } from './cp-dashboard-page/cp-dashboard-page.component';
import { CpHomePageComponent } from './cp-home-page/cp-home-page.component';
import { CpInoviceTablePageComponent } from './cp-inovice-table-page/cp-inovice-table-page.component';
import { CpInquiryPageComponent } from './cp-inquiry-page/cp-inquiry-page.component';
import { CpInvoicePageComponent } from './cp-invoice-page/cp-invoice-page.component';
import { CpLoginPageComponent } from './cp-login-page/cp-login-page.component';
import { CpPayAgingPageComponent } from './cp-pay-aging-page/cp-pay-aging-page.component';
import { CpPaymentPageComponent } from './cp-payment-page/cp-payment-page.component';
import { CpProfilePageComponent } from './cp-profile-page/cp-profile-page.component';
import { CpSalesOrderPageComponent } from './cp-sales-order-page/cp-sales-order-page.component';
import { CPCustDeliveryPageComponent } from './cpcust-delivery-page/cpcust-delivery-page.component';
import { EpDashboardPageComponent } from './ep-dashboard-page/ep-dashboard-page.component';
import { EpLeaveDetPageComponent } from './ep-leave-det-page/ep-leave-det-page.component';
import { EpLoginPageComponent } from './ep-login-page/ep-login-page.component';
import { EpPayslipPdfPafeComponent } from './ep-payslip-pdf-pafe/ep-payslip-pdf-pafe.component';
import { EpProfilePageComponent } from './ep-profile-page/ep-profile-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SideCompComponent } from './side-comp/side-comp.component';
import { VpCreditPageComponent } from './vp-credit-page/vp-credit-page.component';
import { VpDashboardPageComponent } from './vp-dashboard-page/vp-dashboard-page.component';
import { VpDebitPageComponent } from './vp-debit-page/vp-debit-page.component';
import { VpGoodsReceiptPageComponent } from './vp-goods-receipt-page/vp-goods-receipt-page.component';
import { VpInvoiceDetPAgeComponent } from './vp-invoice-det-page/vp-invoice-det-page.component';
import { VpInvoiceListPageComponent } from './vp-invoice-list-page/vp-invoice-list-page.component';
import { VpLoginPageComponent } from './vp-login-page/vp-login-page.component';
import { VpPaymentPageComponent } from './vp-payment-page/vp-payment-page.component';
import { VpProfilePageComponent } from './vp-profile-page/vp-profile-page.component';
import { VpPurchaseOrderPageComponent } from './vp-purchase-order-page/vp-purchase-order-page.component';
import { VpRfqPageComponent } from './vp-rfq-page/vp-rfq-page.component';
import { VpSideBarPageComponent } from './vp-side-bar-page/vp-side-bar-page.component';
import { LoginAuthGuard } from './Guard/login-auth.guard';
import { LoginAuthVendorGuard } from './Guard/login-auth-vendor.guard';
import { EmployeeLoginAuthGuard } from './Guard/employee-login-auth.guard';

const routes: Routes = [
  {
    path: "loginPage" ,
    component: CpLoginPageComponent,
    // canActivate: [LoginAuthGuard]
    
  },
  {
    path: "home" ,
    component: HomePageComponent
  },
  {
    path: "dashboard" ,
    component: CpDashboardPageComponent
  },
  {
    path: "sales" ,
    component: CpSalesOrderPageComponent
  },
  {
    path: "creditmemo" ,
    component: CpCreditMemoPageComponent
  },
  {
    path: "custdelivery" ,
    component: CPCustDeliveryPageComponent
  },
  {
    path: "payaging" ,
    component: CpPayAgingPageComponent
  },
  {
    path: "profile" ,
    component: CpProfilePageComponent
  },
  {
    path: "invoice" ,
    component: CpInvoicePageComponent
  },
  {
    path: "invoicetable" ,
    component: CpInoviceTablePageComponent
  },
  {
    path: "paymentdetails" ,
    component: CpPaymentPageComponent
  },
  {
    path: "sidenavbar" ,
    component: SideCompComponent,
  },
  {
    path: "vplogin" ,
    component: VpLoginPageComponent,
    canActivate: [LoginAuthVendorGuard]
  },
  {
    path: "vpprofile" ,
    component: VpProfilePageComponent,
  },
  {
    path: "vpdashboard" ,
    component: VpDashboardPageComponent,
  },
  {
    path: "goodreceipt" ,
    component: VpGoodsReceiptPageComponent,
  },
  {
    path: "purchaseorder" ,
    component: VpPurchaseOrderPageComponent,
  },
  {
    path: "vpPayment" ,
    component: VpPaymentPageComponent,
  },
  {
    path: "rfq" ,
    component: VpRfqPageComponent,
  },
  {
    path: "inquiry" ,
    component: CpInquiryPageComponent
  },
  {
    path: "vpinvoicelist" ,
    component: VpInvoiceListPageComponent,
  },
  {
    path: "vpinvoicedet" ,
    component: VpInvoiceDetPAgeComponent,
  },
  {
    path: "vpcredit" ,
    component: VpCreditPageComponent,
  },
  {
    path: "vpdebit" ,
    component: VpDebitPageComponent,
  },

  {
    path: "eprofile" ,
    component: EpProfilePageComponent,
  },

  {
    path: "elogin" ,
    component: EpLoginPageComponent,
    canActivate: [EmployeeLoginAuthGuard]
  },

  {
    path: "epleavedet" ,
    component: EpLeaveDetPageComponent,
  },

  {
    path: "epaypdf" ,
    component: EpPayslipPdfPafeComponent,
  },
  {
    path: "edashboard" ,
    component: SideCompComponent,
  },

  {
    path: "" ,
    redirectTo : "home",
    pathMatch:"full"
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
