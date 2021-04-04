
export default class SignupModel {
    username: string = '';
    password: string = '';
    firstname: string = '';
    lastname: string = '';
    phoneNumber: string = '';

    constructor(
        username: string, 
        password: string, 
        firstname: string, 
        lastname: string, 
        phoneNumber: string) {
        this.username = username;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.phoneNumber = phoneNumber;
    }

}

export class SignupModelBuilder {

    private readonly username: string;
    private password: string = '';
    private firstname: string = '';
    private lastname: string = '';
    private phoneNumber: string = '';

    constructor(username: string) {
        this.username = username;
    }

    public setPassword(password: string) {
        this.password = password;
        return this;
    }

    public setFirstname(firstname: string) {
        this.firstname = firstname;
        return this;
    }

    public setLastname(lastname: string) {
        this.lastname = lastname;
        return this;
    }

    public setPhoneNumber(phoneNumber: string) {
        this.phoneNumber = phoneNumber;
        return this;
    }

    public build() {
        return new SignupModel(
            this.username, 
            this.password,
            this.firstname,
            this.lastname,
            this.phoneNumber
            );
    }
}
