import React, {useState} from "react"
import { graphql } from "gatsby"
import {RiSendPlane2Line} from "react-icons/ri";
import Field from '../components/Field'

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

  const [registerDetails, setRegisterDetails] = useState({
    studentName: 'Student Name',
    studentGender: 'male',
    studentSchool: 'School',
    studentGrade: 'Grade',
    studentEmail: 'student@example.com',
    track: 'engineering',

    parentNameFather: 'Father',
    parentEmailFather: 'father@example.com',
    parentPhoneFather: '1-800-dad',
    
    parentNameMother: 'Mother',
    parentEmailMother: 'mother@example.com',
    parentPhoneMother: '1-800-mom',

    parentInterest: 'no',

  });

  return  (
    <Layout className="register-page">
      <SEO 
        title={frontmatter.title}
        description={frontmatter.title + " " + site.siteMetadata.title}
      />
      <div className="wrapper">
        <h1>{frontmatter.title}</h1>
        <div className="description" dangerouslySetInnerHTML={{ __html: html }} />

        <form 
          className="register-form w-full max-w-2xl mx-auto" 
          action="/thanks" name="register" method="POST" 
          data-netlify="true" data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="register" />

          <h3>Student Information</h3>
          {/* Student Name */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full aaamd:w-1/2 px-3 mb-6 md:mb-0">
              <Field 
                required
                label="Student Name"
                id="student_name_input"
                type="text"
                name="student_name"
                // autoComplete="name"
                value={registerDetails.studentName}
                onChange={(e) => {
                  setRegisterDetails({...registerDetails, studentName: e.target.value});
                }}
              />
            </div>
          </div>

          {/* Student Gender */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full aaamd:w-1/2 px-3 mb-6 md:mb-0">
              <Field 
                required
                label="Male"
                id="student_male"
                type="radio"
                name="gender"
                value={registerDetails.studentGender}
                onChange={(e) => {
                  setRegisterDetails({...registerDetails, studentGender: e.target.value});
                }}
              />

              <Field  
                required
                label="Female"
                id="student_female"
                type="radio"
                name="gender"
                value={registerDetails.studentGender}
                onChange={(e) => {
                  setRegisterDetails({...registerDetails, studentGender: e.target.value});
                }}
              />

              <p className="description">
                <em>Why do we ask?</em> The diversity of the students in the program affects what grants
                we are elegiable to apply for.
              </p>
            </div>
          </div>
          
          {/* Student Email */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full aaamd:w-1/2 px-3 mb-6 md:mb-0">
              <Field
                required
                label="Student Email"
                id="student_email_input"
                type="email"
                name="student_email"
                // autoComplete="name"
                value={registerDetails.studentEmail}
                onChange={(e) => {
                  setRegisterDetails({ ...registerDetails, studentEmail: e.target.value });
                }}
              />
            </div>
          </div>

          {/* Student School */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full aaamd:w-1/2 px-3 mb-6 md:mb-0">
              <Field
                required
                label="Student School"
                id="student_school_input"
                type="text"
                name="student_school"
                // autoComplete="name"
                value={registerDetails.studentSchool}
                onChange={(e) => {
                  setRegisterDetails({ ...registerDetails, studentSchool: e.target.value });
                }}
              />
            </div>
          </div>
          
          {/* Track */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full aaamd:w-1/2 px-3 mb-6 md:mb-0">
              <Field
                required
                label="Engineering"
                id="track_engineering_input"
                type="radio"
                name="track"
                // autoComplete="name"
                value={registerDetails.track}
                onChange={(e) => {
                  setRegisterDetails({ ...registerDetails, track: e.target.value });
                }}
              />

              <Field
                required
                label="Programming"
                id="track_programing_input"
                type="radio"
                name="track"
                // autoComplete="name"
                value={registerDetails.track}
                onChange={(e) => {
                  setRegisterDetails({ ...registerDetails, track: e.target.value });
                }}
              />

              <Field
                required
                label="Both"
                id="track_both_input"
                type="radio"
                name="track"
                // autoComplete="name"
                value={registerDetails.track}
                onChange={(e) => {
                  setRegisterDetails({ ...registerDetails, track: e.target.value });
                }}
              />
            </div>
          </div>
          
          <h3>Parent Information</h3>
          <small>Only 1 parent's information is required but feel free to fill out both</small>

          {/* Father Name */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full aaamd:w-1/2 px-3 mb-6 md:mb-0">
              <Field
                label="Father's Name"
                type="text"
                name="father_name"
                value={registerDetails.parentNameFather}
                onChange={(e) => {
                  setRegisterDetails({ ...registerDetails, parentNameFather: e.target.value });
                }}
              />
            </div>

            <div className="w-full aaamd:w-1/2 px-3 mb-6 md:mb-0">
              <Field
                label="Father's Email"
                type="text"
                name="father_email"
                value={registerDetails.parentEmailFather}
                onChange={(e) => {
                  setRegisterDetails({ ...registerDetails, parentEmailFather: e.target.value });
                }}
              />
            </div>

            <div className="w-full aaamd:w-1/2 px-3 mb-6 md:mb-0">
              <Field
                label="Father's Phone"
                type="tel"
                name="father_name"
                value={registerDetails.parentPhoneFather}
                onChange={(e) => {
                  setRegisterDetails({ ...registerDetails, parentPhoneFather: e.target.value });
                }}
              />
            </div>
          </div>

        
          {/* Mothers Name */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full aaamd:w-1/2 px-3 mb-6 md:mb-0">
              <Field
                label="Mother's Name"
                type="text"
                name="mother_name"
                value={registerDetails.parentNameMother}
                onChange={(e) => {
                  setRegisterDetails({ ...registerDetails, parentNameMother: e.target.value });
                }}
              />
            </div>

            <div className="w-full aaamd:w-1/2 px-3 mb-6 md:mb-0">
              <Field
                label="Mother's Email"
                type="text"
                name="mother_email"
                value={registerDetails.parentEmailMother}
                onChange={(e) => {
                  setRegisterDetails({ ...registerDetails, parentEmailMother: e.target.value });
                }}
              />
            </div>

            <div className="w-full aaamd:w-1/2 px-3 mb-6 md:mb-0">
              <Field
                label="Mother's Phone"
                type="tel"
                name="mother_name"
                value={registerDetails.parentPhoneMother}
                onChange={(e) => {
                  setRegisterDetails({ ...registerDetails, parentPhoneMother: e.target.value });
                }}
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full aaamd:w-1/2 px-3 mb-6 md:mb-0">

              <div>
                Are you interested in helping?
                <span className="description">
                  Let us know if you might be interested in helping throughout the year or at the Expo
                </span>
              </div>



              <Field
                required
                label="Yes"
                type="radio"
                name="parent_interested"
                value={registerDetails.parentInterest}
                onChange={(e) => {
                  setRegisterDetails({ ...registerDetails, parentInterest: e.target.value });
                }}
              />

              <Field
                required
                label="No"
                type="radio"
                name="parent_interested"
                value={registerDetails.parentInterest}
                onChange={(e) => {
                  setRegisterDetails({ ...registerDetails, parentInterest: e.target.value });
                }}
              />
            </div>
          </div>

          
          <div class="flex items-center justify-between">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Register
            </button>
          </div>
        </form>


        




      
      </div>

    </Layout>
  )
}

export default Register