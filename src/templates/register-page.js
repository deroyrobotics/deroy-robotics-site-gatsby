import React from "react"
import { graphql } from "gatsby"
import {RiSendPlane2Line} from "react-icons/ri";

import Layout from "../components/layout"
import SEO from "../components/seo"

export const pageQuery = graphql`
  query RegisterQuery($id: String!){
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

const Register = ({data}) => {
  const { markdownRemark, site } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return  (
    <Layout className="register-page">
      <SEO 
        title={frontmatter.title}
        description={frontmatter.title + " " + site.siteMetadata.title}
      />
      <div className="wrapper">
        <h1>{frontmatter.title}</h1>
        <div className="description" dangerouslySetInnerHTML={{ __html: html }} />
        <form className="contact-form" action="/thanks" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="register" />

          {/* Student Name */}
          <p>
            <label>
              Student Name
              <input type="text" name="student_name" />
            </label>   
          </p>

          {/* Student Gender */}
          <div>
            <label htmlFor="gender-male">
              Male
              <input type="radio" id="gender-male" name="gender" value="male" />
            </label>

            <input type="radio" id="gender-female" name="gender" value="female" />
            <label htmlFor="gender-female">Female</label>

            <span className="description">
              <em>Why do we ask?</em> 
              The diversity of the students in the program affects what grants 
              we are elegiable to apply for.
            </span>
          </div>

          {/* Student Email */}
          <p>
            <label>
              Student Email
              <input type="email" name="student_email" />
            </label>
          </p>

          <div>
            <label>
              Student School
              <input type="text" name="student_school" />
            </label>

            <label>
              Student Grade
              <input type="text" name="grade" />
            </label>
          </div>

          {/* Track */}
          <div>
            <input type="radio" id="track-eng" name="track" value="engineering only" />
            <label htmlFor="track-eng">Engineering</label>

            <input type="radio" id="track-prog" name="track" value="programming only" />
            <label htmlFor="track-prog">Programming</label>

            <input type="radio" id="track-both" name="track" value="both engeering and programming" />
            <label htmlFor="track-both">Both</label>
          </div>

          {/* Parent Email */}
          <p>
            <label>
              Parent Email
              <input type="email" name="email" />
            </label>
          </p>

          {/* Parent Name */}
          <p>
            <label>
              Parent Name
            <input type="text" name="name" />
            </label>
          </p>

          {/* Phone */}
          <p>
            <label>
              Parent Phone
              <input type="tel" name="phone" />
            </label>   
          </p>

          <div>
            Are you interested in helping?
            <input type="radio" id="help-yes" name="help" value="Yes" />
            <label htmlFor="help-yes">Yes</label>

            <input type="radio" id="help-no" name="help" value="No" />
            <label htmlFor="help-no">No</label>

            <span className="description">
              Let us know if you might be interested in helping throughout the year or at the Expo
            </span>
          </div>
        





          <p>
            <label>Message<textarea name="message"></textarea></label>
          </p>
          <p className="text-align-right">
            <button className="button" type="submit">Send Message <span className="icon -right"><RiSendPlane2Line/></span></button>
          </p>
        </form>
      </div>

    </Layout>
  )
}

export default Register