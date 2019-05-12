import React from "react";
import { createCookie, deleteCookie, lireCookie } from "../utils/cookieUtil";
import Layout from "../components/layout";
import { graphql } from "gatsby";

class Logout extends React.Component {


  constructor(props) {
    super(props);
    deleteCookie("jessionid")
    if(typeof window !== "undefined") window.location = "/";
  }


  render(){
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
      </Layout>
    )
  }
}

export default Logout

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