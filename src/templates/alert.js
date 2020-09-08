import React from "react"
import { graphql } from "gatsby"
// import {RiSendPlane2Line} from "react-icons/ri";

export const alertQuery = graphql`
  query AlertQuery($id: String!){
		markdownRemark(id: { eq: $id }) {
      id
			html
			excerpt(pruneLength: 140)
      frontmatter {
        title
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Alert = ({data}) => {
  const { markdownRemark, site } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return  (
    <div className="alert">
      <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export default Alert