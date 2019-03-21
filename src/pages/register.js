import React from "react"
import axios from "axios"

class Register extends React.Component {
    urlSignUp = "http://formaviz-backend.cleverapps.io/api/v1/signup";
    showSuccess = false;
    input = {
        "email": "",
        "password": "",
        "firstName": "",
        "lastName": "",
        "role": "PROSPECT"
    };


    constructor(props) {
        super(props);

        this.setFirstName = this.setFirstName.bind(this);
        this.setLastName = this.setLastName.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);


        this.getFirstName = this.getFirstName.bind(this);
        this.getlastName = this.getlastName.bind(this);
        this.getEmail = this.getEmail.bind(this);
        this.getPassword = this.getPassword.bind(this);

        //this.signIn = this.signIn.bind(this);
    }

    setFirstName(event){
        this.input.firstName = event.target.value
    }

    setLastName(event){
        this.input.lastName = event.target.value
    }

    setEmail(event){
        this.input.email = event.target.value
    }
    setPassword(event){
        this.input.password = event.target.value
    }
    getFirstName(){
        return this.input.firstName;
    }
    getlastName(){
        return this.input.lastName;
    }
    getEmail(){
        return this.input.email;
    }
    getPassword(){
        return this.input.password;
    }

    callbackSuccess(response){
        alert("Success")
    }

    callbackError(error){
        alert("error")
    }


    signIn(callbackSuccess, callbackError){
        console.log("[signIn]: email: " + this.getEmail() + ", firstName: " + this.getFirstName() + ", lastName: " + this.getlastName());

        console.log("input:")
        console.log(this.input);
        axios.post(this.urlSignUp, this.input)
            .then(function (response) {
                    console.log(response)
                    callbackSuccess(response)
            })
            .catch(function (error) {
                console.log("Error: ");
                console.log(error)
                callbackError(error)
            });


    }

    render() {
        return (
            <div className="card align-middle mx-auto w-50 p-3 text-center">
                <form>
                    <div className="card-header"> S'enregistrer  </div>
                    <div className="card-body">
                        <div className="input-group mb-3">
                            <input className="form-control" type="text" placeholder="Prenom" onChange={this.setFirstName}/>
                        </div>
                        <div className="input-group mb-3">
                            <input className="form-control" type="text" placeholder="Nom" onChange={this.setLastName}/>
                        </div>
                        <div className="input-group mb-3">
                            <input className="form-control" type="text" placeholder="Email" onChange={this.setEmail}/>
                        </div>
                        <div className="input-group mb-3">
                            <input className="form-control" type="password" placeholder="password" onChange={this.setPassword}/>
                        </div>
                    </div>
                </form>
                <div className="justify-content-center">
                    <button  onClick={() => this.signIn(this.callbackSuccess,this.callbackError)}>S'enregistrer</button>
                </div>
                <div className="card-footer text-muted">
                    <label> Deja un compte ? </label>
                    <a href="/login"> Se connecter</a>
                </div>
            </div>
        );
    }
}

export default Register