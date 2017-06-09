class Credential {
    _id;
    _email;
    _password;
    _sessionToken;

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }

    get sessionToken() {
        return this._sessionToken;
    }

    set sessionToken(value) {
        this._sessionToken = value;
    }
}

export default Credential;