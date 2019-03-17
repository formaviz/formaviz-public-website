import React from "react"
import {Link} from "gatsby"
import {StaticQuery, graphql} from "gatsby"
import {rhythm, scale} from "../utils/typography"
import Image from "gatsby-image"

class Register extends React.Component {
    input = {
        email : '',
        password :''
    }
    constructor(props) {
        super(props);
        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.getEmail = this.getEmail.bind(this);
        this.getPassword = this.getPassword.bind(this);
        this.signIn = this.signIn.bind(this);
    }

    setEmail(event){
        this.input.email = event.target.value
    }
    setPassword(event){
        this.input.password = event.target.value
    }
    getEmail(){
        return this.input.email;
    }
    getPassword(){
        return this.input.password;
    }

    signIn(){
        console.log("[signIn]: email: " + this.getEmail() + " , password:" + this.getPassword());
    }

    render() {
        return (
            <div className="card align-middle mx-auto w-50 p-3 text-center">
                <form>
                    <div className="card-header"> Register </div>
                    <div className="card-body">
                        <div className="input-group mb-3">
                            <input className="form-control" type="text" placeholder="Email" onChange={this.setEmail}/>
                        </div>
                        <div className="input-group mb-3">
                            <input className="form-control" type="password" placeholder="password" onChange={this.setPassword}/>
                        </div>
                    </div>
                </form>
                <div className="justify-content-center">
                    <button onClick={this.signIn}>S'enregistrer</button>
                </div>
                <div className="card-footer text-muted">
                    <label> Deja un compte ? </label>
                    <a href="/login"> Se connecter</a>
                </div>
                <div>  </div>
            </div>)

    }
}

export default Register