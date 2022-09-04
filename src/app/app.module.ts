import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { CpHomePageComponent } from './cp-home-page/cp-home-page.component';
import { CpLoginPageComponent } from './cp-login-page/cp-login-page.component';
import { CpSalesOrderPageComponent } from './cp-sales-order-page/cp-sales-order-page.component';
import { LoginPageComponent } from './LoginPage/LoginPage.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WavesModule, TableModule, IconsModule } from 'angular-bootstrap-md';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { CpCreditMemoPageComponent } from './cp-credit-memo-page/cp-credit-memo-page.component';
import { CPCustDeliveryPageComponent } from './cpcust-delivery-page/cpcust-delivery-page.component';
import { CpPayAgingPageComponent } from './cp-pay-aging-page/cp-pay-aging-page.component';
import { CpDashboardPageComponent } from './cp-dashboard-page/cp-dashboard-page.component';
import { CpProfilePageComponent } from './cp-profile-page/cp-profile-page.component';
// import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CpInvoicePageComponent } from './cp-invoice-page/cp-invoice-page.component';
import { CpInoviceTablePageComponent } from './cp-inovice-table-page/cp-inovice-table-page.component';
import {MatDialogModule} from '@angular/material/dialog';
import { Popover } from './cp-pay-aging-page/cp-pay-aging-page.component';
import { CpPaymentPageComponent } from './cp-payment-page/cp-payment-page.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { CpInquiryPageComponent } from './cp-inquiry-page/cp-inquiry-page.component';
import { VpSideBarPageComponent } from './vp-side-bar-page/vp-side-bar-page.component';
import { VpDashboardPageComponent } from './vp-dashboard-page/vp-dashboard-page.component';
import { VpGoodsReceiptPageComponent } from './vp-goods-receipt-page/vp-goods-receipt-page.component';
import {MatTabsModule} from '@angular/material/tabs';
import { VpPurchaseOrderPageComponent } from './vp-purchase-order-page/vp-purchase-order-page.component';
import { VpLoginPageComponent } from './vp-login-page/vp-login-page.component';
import { VpProfilePageComponent } from './vp-profile-page/vp-profile-page.component';
import { VpRfqPageComponent } from './vp-rfq-page/vp-rfq-page.component';
import { VpInvoiceListPageComponent } from './vp-invoice-list-page/vp-invoice-list-page.component';
import { VpInvoiceDetPAgeComponent } from './vp-invoice-det-page/vp-invoice-det-page.component';
import { VpCreditPageComponent } from './vp-credit-page/vp-credit-page.component';
import { VpDebitPageComponent } from './vp-debit-page/vp-debit-page.component';
import { VpPaymentPageComponent } from './vp-payment-page/vp-payment-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EpLoginPageComponent } from './ep-login-page/ep-login-page.component';
import { EpDashboardPageComponent } from './ep-dashboard-page/ep-dashboard-page.component';
import { EpLeaveDetPageComponent } from './ep-leave-det-page/ep-leave-det-page.component';
import { EpProfilePageComponent } from './ep-profile-page/ep-profile-page.component';
import { EpPayslipPdfPafeComponent } from './ep-payslip-pdf-pafe/ep-payslip-pdf-pafe.component';
import { SideCompComponent } from './side-comp/side-comp.component';



@NgModule({
    declarations: [
        AppComponent,
        CpHomePageComponent,
        CpLoginPageComponent,
        CpSalesOrderPageComponent,
        LoginPageComponent,
        CpCreditMemoPageComponent,
        CPCustDeliveryPageComponent,
        CpPayAgingPageComponent,
        CpDashboardPageComponent,
        CpProfilePageComponent,
        CpInvoicePageComponent,
        CpInoviceTablePageComponent,
        Popover,
        CpPaymentPageComponent,
        CpInquiryPageComponent,
        VpSideBarPageComponent,
        VpDashboardPageComponent,
        VpGoodsReceiptPageComponent,
        VpPurchaseOrderPageComponent,
        VpLoginPageComponent,
        VpProfilePageComponent,
        VpRfqPageComponent,
        VpInvoiceListPageComponent,
        VpInvoiceDetPAgeComponent,
        VpCreditPageComponent,
        VpDebitPageComponent,
        VpPaymentPageComponent,
        HomePageComponent,
        EpLoginPageComponent,
        EpDashboardPageComponent,
        EpLeaveDetPageComponent,
        EpProfilePageComponent,
        EpPayslipPdfPafeComponent,
        SideCompComponent
        
    ],
    imports: [
        BrowserModule,
        AppRoutingModule, FormsModule, HttpClientModule,ReactiveFormsModule,
        WavesModule,TableModule,IconsModule,
        Ng2SearchPipeModule,
        Ng2OrderModule,
        NgxPaginationModule,
        BrowserAnimationsModule,
        MatIconModule,
        BrowserAnimationsModule,
        MatDialogModule,
        MatSlideToggleModule,
        MatTabsModule,
    
        
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

