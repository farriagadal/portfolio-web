export class Contact {
   
    public name: string;
    public phone: string;
    public email: string;
    public message: string;
    
    constructor(contact: any = null) {
        if (contact) {
            this.name = contact.name;
            this.phone = contact.phone;
            this.email = contact.email;
            this.message = contact.message;
        }
    }

    public toJSON(): any {
        return {
            name: this.name,
            phone: this.phone,
            email: this.email,
            message: this.message,
  
        }
    }
}