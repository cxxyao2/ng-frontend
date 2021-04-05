import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChannelComponent } from './channel/channel.component';
import { FooterbarComponent } from './menu/footerbar/footerbar.component';
import { HomepageComponent } from './menu/homepage/homepage.component';
import { MaterialCenterModule } from './material-center.module';
import { PageNotFoundComponent } from './menu/page-not-found/page-not-found.component';
import { SidebarComponent } from './menu/sidebar/sidebar.component';
import { ToolbarComponent } from './menu/toolbar/toolbar.component';

import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { CartModule } from './cart/cart.module';
import { httpInterceptorProviders } from './http-interceptors';
import { CreatePasswordStrengthDirective } from './share/create-password-strength.directive';
import { UniqueUserDirective } from './share/unique-user.directive';
import { IdentifyPasswordDirective } from './share/identify-password.directive';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterbarComponent,
    SidebarComponent,
    HomepageComponent,
    PageNotFoundComponent,
    ChannelComponent,
    CreatePasswordStrengthDirective,
    UniqueUserDirective,
    IdentifyPasswordDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialCenterModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule,
    CartModule,
    AuthModule,
    AppRoutingModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
