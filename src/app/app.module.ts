import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialCenterModule } from './material-center.module';
import { LoginComponent } from './auth/login/login.component';
import { NewcartComponent } from './cart/newcart/newcart.component';
import { ToolbarComponent } from './menu/toolbar/toolbar.component';
import { FooterbarComponent } from './menu/footerbar/footerbar.component';
import { SidebarComponent } from './menu/sidebar/sidebar.component';
import { RegisterComponent } from './auth/register/register.component';
import { ChangepasswordComponent } from './auth/changepassword/changepassword.component';
import { ItemDetailsComponent } from './cart/item-details/item-details.component';
import { ItemListComponent } from './cart/item-list/item-list.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminComponent } from './admin/admin/admin.component';
import { ChannelComponent } from './admin/channel/channel.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { AllInputsComponent } from './all-inputs/all-inputs.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewcartComponent,
    ToolbarComponent,
    FooterbarComponent,
    SidebarComponent,
    RegisterComponent,
    ChangepasswordComponent,
    ItemDetailsComponent,
    ItemListComponent,
    HomepageComponent,
    AdminComponent,
    ChannelComponent,
    ResetPasswordComponent,
    PageNotFoundComponent,
    ItemCardComponent,
    AllInputsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialCenterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
