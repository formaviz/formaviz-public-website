import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { Navbar,Nav,NavDropdown} from 'react-bootstrap';

class Layout extends React.Component {

  render() {
    const { location, title, children } = this.props

    
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
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/login">login</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    )

    return (
        <div>
          <header>{header}</header>
          <main>{children}</main>
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
