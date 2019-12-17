import { Component, OnInit, AfterViewInit } from '@angular/core';
import { WOW } from 'src/assets/js/wow.js';

import { ContactUsMessage } from '../../shared/model/contact.us.message.model';
import { GeneralService } from '../../shared/services/general.service';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit, AfterViewInit {

  message: ContactUsMessage = new ContactUsMessage();
  enableSend: boolean;

  clearMessage() {
    this.message.Message = null;
    this.message.UserEmail = null;
    this.message.UserName = null;
  }

  constructor(private service: GeneralService) { }

  ngOnInit() {
    this.clearMessage();
    this.enableSend = false;
  }
  ngAfterViewInit() {
    new WOW().init();
  }

  sendMessage() {
    this.service.sendContactUsMessage(this.message).subscribe(res => {
      console.log('sendContactUsMessage - res', res);
     if (res.Success) {
      this.enableSend = false;
       }
    });
  }

  public setMessage(message) {
    this.message.Message = message;
    this.validateForm();
  }

  public setUserName(userName) {
    this.message.UserName = userName;
    this.validateForm();
  }

  public setUserEmail(userEmail) {
    this.message.UserEmail = userEmail;
    this.validateForm();
  }

  validateForm() {
    if ( this.message.Message
      && this.message.UserEmail
      && this.message.UserName) {
        this.enableSend = true;
    } else {
      this.enableSend = false;
    }
  }


}
