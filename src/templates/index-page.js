import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { RiArrowRightSLine } from "react-icons/ri"

import Layout from "../components/layout"
import BlogListHome from "../components/blog-list-home"
import AlertList from "../components/alert-list"
import SEO from "../components/seo"
import VideoEmbed from '../components/VideoEmbed'

export const pageQuery = graphql`
  query HomeQuery($id: String!){
		markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        tagline
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 480, maxHeight: 380, quality: 80, srcSetBreakpoints: [960, 1440]) {
              ...GatsbyImageSharpFluid
            }
            sizes {
              src
            }
          }
        }
        cta {
          ctaText
          ctaLink
        }
      }
    }
  }
`

const HomePage = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const featuredVideo =  frontmatter.featuredVideo // || "FjQlhCHXyB4"
  const Image = frontmatter.featuredImage ? frontmatter.featuredImage.childImageSharp.fluid : ""
	return (
		<Layout>
      <SEO/>
      <AlertList />
      <div className="home-content relative">
        <div className="z-10 home-banner-bg"></div>

        <div className="z-20 pt-12 home-banner flex flex-col md:flex-row content-start">
          <div className="flex-1 mt-2 px-2 md:px-4">
            <h1 className="title text-4xl font-bold pb-4">{frontmatter.title}</h1>
            <p className="tagline">{frontmatter.tagline}</p>
            <div className="description" dangerouslySetInnerHTML={{__html: html}}/>
            <Link to={frontmatter.cta.ctaLink} className="button">{frontmatter.cta.ctaText}<span className="icon -right"><RiArrowRightSLine/></span></Link>
          </div>

          <div className="md:pl-6 pt-5 px-2 md:px-4">
            <pre>
              {JSON.stringify(frontmatter, null, 2)}
            </pre>
            {featuredVideo ? (
              <VideoEmbed height="400" src={featuredVideo} />
            ) : ""}
            {Image ? (
              <Img 
                fluid={Image} 
                alt={frontmatter.title + ' - Featured image'}
                className="featured-image"
              />

            ) : ""}
          </div>
        </div>
      </div>
      
      <BlogListHome/>
		</Layout>
	)
}

export default HomePage
