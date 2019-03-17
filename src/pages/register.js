import React from "react"
import {Link} from "gatsby"
import {StaticQuery, graphql} from "gatsby"
import {rhythm, scale} from "../utils/typography"
import Image from "gatsby-image"

class Register extends React.Component {
    render() {
        return (
            <div className="card align-middle mx-auto w-50 p-3 text-center">
                <form>
                    <div className="card-header"> Register </div>
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
                    <button>S'enregistrer</button>
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