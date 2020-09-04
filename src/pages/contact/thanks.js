import React from "react"
import { Link } from "gatsby"
import SEO from "../../components/seo"
import Layout from "../../components/layout"

const Thanks = () => (
  <Layout className="thanks-page">
    <SEO title="Thank you" />
    <div
      className="wrapper"
      style={{
        textAlign: "center",
      }}
    >
      <h1 className="text-3xl mb-8">Thanks for contacting us...</h1>

      <p className="my-8">
        Thank you for getting in touch us. We will get back to you shortly.
      </p>

      <Link
        to="/"
        className="bg-gray-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Return home
      </Link>
    </div>
  </Layout>
)

export default Thanks