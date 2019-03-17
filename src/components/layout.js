import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import Image from "gatsby-image"

class Layout extends React.Component {

  render() {
    const { location, title, children } = this.props
    let header = (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
      <StaticQuery
      query={querynav}
        render={data => {
          return (
              <Image
                fixed={data.logo.childImageSharp.fixed}
                style={{
                  marginRight: rhythm(1 / 2),
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
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Services</a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="#">Action</Link>
              <Link className="dropdown-item" to="#">Another action</Link>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
    </nav>
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
