import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const pageQuery = graphql`
  query AboutQuery($id: String!){
		markdownRemark(id: { eq: $id }) {
      id
			html
			excerpt(pruneLength: 140)
      frontmatter {
        title,
				leftcol,
				rightcol
      }
    }
  }
`
const AboutPage = ({ data }) => {
	const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark

	return (
		<Layout className="page">
			<SEO
				title={frontmatter.title}
				description={excerpt}
			/>
			<div className="wrapper">
				<h1 className="page-title">{frontmatter.title}</h1>
				<article className="pb-4 mb-4" dangerouslySetInnerHTML={{ __html: html }} />
				<div className="flex flex-col md:flex-row">
					<div className="pb-4 flex-1 md:pr-4" dangerouslySetInnerHTML={{ __html: frontmatter.leftcol }} />
					<div className="pb-4 flex-1 md:pl-4" dangerouslySetInnerHTML={{ __html: frontmatter.rightcol }} />

				</div>
			</div>
		</Layout>
	)
}

export default AboutPage