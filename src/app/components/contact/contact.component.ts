import { Component, OnInit, forwardRef } from '@angular/core';
import { Contacts } from '@ionic-native/contacts/ngx';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ContactComponent),
      multi: true
    }
  ]
})
export class ContactComponent implements OnInit, ControlValueAccessor {
  contact: string;

  private propagateChange : any = () => {};


  constructor(
    private contacts: Contacts,
    private platform: Platform,
  ) { }

  ngOnInit() {}


  async openContacts() {
    if (this.platform.is('mobile')) {
      try {
        const contact = await this.contacts.pickContact();
        this.contact = contact.name.formatted;
        this.propagateChange(this.contact);
      } catch (error) {
        
      }
    }
  }

  writeValue(contact: string) {
    if (contact) {
      this.contact = contact;
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
    // throw new Error("Method not implemented.");
  }
  setDisabledState?(isDisabled: boolean): void {
    // throw new Error("Method not implemented.");
  }

}
