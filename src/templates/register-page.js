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

    parentEmailFather: 'father@example.com',
    parentNameFather: 'Father',
    parentPhoneFather: '1-800-dad',
    parentInterestFather: 'no',
    
    parentEmailMother: 'mother@example.com',
    parentNameMother: 'Mother',
    parentPhoneMother: '1-800-mom',
    parentInterestMother: 'no',
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

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full aaamd:w-1/2 px-3 mb-6 md:mb-0">
              <Field 
                required
                label="Student Name"
                id="student_name_input"
                type="text"
                name="plan"
                // autoComplete="name"
                value={registerDetails.studentName}
                onChange={(e) => {
                  setRegisterDetails({...registerDetails, studentName: e.target.value});
                }}
              />
            </div>
          </div>

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
            </div>
          </div>
        </form>


        <form className="w-full max-w-2xl mx-auto">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <Field 
                required
                label="Student Name"
                id="student_name_input"
                type="text"
                name="plan"
                // autoComplete="name"
                value={registerDetails.studentName}
                onChange={(e) => {
                  setRegisterDetails({...registerDetails, studentName: e.target.value});
                }}
              />


              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                First Name
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
              <p className="text-red-500 text-xs italic">Please fill out this field.</p>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Last Name
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                Password
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />
              <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                City
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                State
              </label>
              <div className="relative">
                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                  <option>New Mexico</option>
                  <option>Missouri</option>
                  <option>Texas</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                Zip
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
            </div>
          </div>
        </form>




        <form className="register-form w-full max-w-2xl mx-auto" action="/thanks" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="register" />
          
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">

            </div>
          </div>

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