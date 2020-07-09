import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
//import { ContactService } from '../services/contact/contact.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from  'sweetalert2';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public current_language: any;
  public current_navfooter: any;
  public contact: Contact;
  public validateForm: FormGroup;
  
  constructor(
  ) {}

  public ngOnInit(): void {
    this.contact = new Contact;
    this.initContactForm();
  }

  public initContactForm(): void {
    this.validateForm = new FormGroup({
      name: new FormControl(null, [Validators.minLength(2), Validators.required]),
      email: new FormControl(null, [Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"), Validators.required]),
      phone: new FormControl(null, [Validators.pattern("[0-9]+"), Validators.required]),
      message: new FormControl(null, [Validators.required]),
    })
  }

  public createContact(e: Event): void {
    if (this.validateForm.status == 'VALID') {
      this.sendEmail();
      if (this.validateForm.value.message === 'Secret') {
        this.showSecret();
      }
    } else {
      this.ErrorNotification();
      this.validateForm.markAsTouched();
    }
  }

  public sendEmail() {
    emailjs.send('gmail', 'templateneokey23', this.contact, "user_Z9ZA15CBTB3P6Kw6xRIeQ")
    .then(success => {
        this.SuccessNotification();
        window.scroll(0,0);
        this.validateForm.markAsUntouched();
        this.contact = new Contact;
    }, error => {
        this.ErrorServer();
        this.validateForm.markAsUntouched();
        this.contact = new Contact;
    });
  }

  public showSecret(): void {
    const audio = new Audio('assets/sound.mp3');
    audio.play();
  }


  public ErrorNotification(): void {
    Swal.fire(
      'Campos incompletos',
      'Por favor rellene todos los campos :)',
      'error'
    )
  }

  public SuccessNotification(): void {
    Swal.fire(
      'Mensaje Enviado!',
      'Recibirá una respuesta en un momento  :)',
      'success'
    )
  }

  public ErrorServer(): void {
    Swal.fire(
      'Error de servidor :(',
      'Intente más tarde, mientras lo solucionamos',
      'error'
    )
  }

}
