import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { RiAlertFill } from "react-icons/ri"

const AlertMaker = ({ data }) => (
  <div className="mt-4">
    <div className="">
      {data}
    </div>
  </div>
)

const Alert = ({data}) => {
  console.log('alert data', data)
  return (
    <div className="alert-item alert bg-yellow-300 text-orange-900 rounded p-4 mb-1 shadow">
      <h3 className="text-2xl">
        <RiAlertFill className="inline-block"/> {data.frontmatter.title}
      </h3>
      <small className="text-xs">{data.frontmatter.date}</small>
      <div className="text-base">
        {data.excerpt}
      </div>
    </div>
  )
}

export default function BlogListHome() {
  return (
    <StaticQuery 
      query={graphql`
        query {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { template: { eq: "alert" } } }
            limit: 6
          ) {
            edges {
              node {
                id
                excerpt(pruneLength: 250)
                frontmatter {
                  date(formatString: "MMMM DD, YYYY")
                  title
                }
              }
            }
          }
        }`
      }

      render={ data => {
          const posts = data.allMarkdownRemark.edges
            .filter(edge => !!edge.node.frontmatter.date)
            .map(edge =>
              <Alert key={edge.node.id} data={edge.node} />
          )
          return <AlertMaker data={posts} />
        } 
      }
    />
  )
}