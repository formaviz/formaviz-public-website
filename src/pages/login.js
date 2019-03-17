import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import Image from "gatsby-image"

class Login extends React.Component {
    render(){
        return (<div className="card align-middle mx-auto w-50 p-3 text-center">
            <form>
                <div className="card-header"> Login </div>
                <div className="card-body">
                    <div className="input-group mb-3">
                        <input
                            className="form-control"
                            type_="text"
                            placeholder="Email"
                        />
                    </div>
                    <div className="input-group mb-3">
                        <input
                            className="form-control"
                            type_="password"
                            placeholder="password"
                        />
                    </div>
                </div>
            </form>
            <div className="justify-content-center">
                <button>Connexion</button>
            </div>
            <div className="card-footer text-muted">
                <label> Pas encore de compte ? </label>
                <a href="register"> S'inscrire </a>
            </div>
            <label>  </label>
        </div>)
    }
}

export default Login