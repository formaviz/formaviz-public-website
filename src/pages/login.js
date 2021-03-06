import React from "react"
import axios from "axios";
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby";
import { createCookie, lireCookie } from "../utils/cookieUtil";


class Login extends React.Component {
    urlLogin = "http://formaviz-backend.cleverapps.io/api/v1/login";

    showSuccess = false;
    input = {
        "email": "",
        "password": "",
    };

    constructor(props) {
        super(props);
        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);

        this.getEmail = this.getEmail.bind(this);
        this.getPassword = this.getPassword.bind(this);

        this.callbackSuccess = this.callbackSuccess.bind(this);
        if(lireCookie('jessionid') != null){
          if(typeof window !== "undefined") window.location = "/";
        }
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

    callbackSuccess(response){
        console.log("token" + response.data.access_token);
        createCookie('jessionid',response.data.access_token,36000)
        if(typeof window !== "undefined") window.location = "/";
    }

    callbackError(error){
        alert("error")
    }

    logIn(callbackSuccess, callbackError){
        console.log("[logIn]: email: " + this.getEmail());

        console.log("input:")
        console.log(this.input);
        axios.post(this.urlLogin, this.input)
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

    render(){
      const { data } = this.props
      const siteTitle = data.site.siteMetadata.title

      return (
        <Layout location={this.props.location} title={siteTitle}>
          <SEO title="Login" />
          <div className="card align-middle mx-auto w-50 p-3 text-center">
            <form>
              <div className="card-header"> Login </div>
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
              <button onClick={() => this.logIn(this.callbackSuccess,this.callbackError)}>Connexion</button>
            </div>
            <div className="card-footer text-muted">
              <label> Pas encore de compte ? </label>
              <a href="/register"> S'inscrire </a>
            </div>
            <label>  </label>
          </div>
        </Layout>
      )
    }
}

export default Login

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`