import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { Navbar,Nav,NavDropdown} from 'react-bootstrap';
import Chatbot from 'formaviz-chatbot/dist/bundle';
import {  lireCookie } from "../utils/cookieUtil";

class Layout extends React.Component {


  render() {
    const { location, title, children } = this.props ;
    const islogin = lireCookie('jessionid') != null;

    var blog;
    if (islogin) {
      blog = <Nav.Link href="/blog">Blog</Nav.Link>;
    } else {
      blog = "";
    }

    const userManagement=islogin? "logout":"login"

    let header = (
      <Navbar style={{background: '#467d97'}}>
      <Navbar.Brand href="/">
        <StaticQuery
        query={querynav}
          render={data => {
            return (
                <Image
                  fixed={data.logo.childImageSharp.fixed}
                  style={{
                    marginBottom: 0,
                    minWidth: 50,
                    borderRadius: `100%`,
                  }}
                  imgStyle={{
                    borderRadius: `50%`,
                  }}
                />
            )
          }}
        />
        Formaviz
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <NavDropdown title="Services" id="basic-nav-dropdown">
            <NavDropdown.Item href="https://formaviz.front-formation.cleverapps.io/liste">Formations</NavDropdown.Item>
            <NavDropdown.Item href="https://formaviz.slack.com/messages/CGZUKGARE/" target="_blank">Messager</NavDropdown.Item>
          </NavDropdown>
          {blog}
          <Nav.Link href={"/"+userManagement}>{userManagement}</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    )

    return (
        <div>
          <header>{header}</header>
          <main>{children}</main>
          <Chatbot isAuthenticated={islogin} position="BottomRight" />
        </div>
    )
  }
}

const querynav = graphql`
  query querynav {
    logo: file(absolutePath: { regex: "/logo-formaviz.png/" }) {
      childImageSharp {
        fixed(width: 30, height: 30) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Layout
