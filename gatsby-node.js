const path = require("path")
var remark = require('remark')
var html = require('remark-html')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogList = path.resolve(`./src/templates/blog-list.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            id
            frontmatter {
              slug
              template
              title
              leftcol
              rightcol
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create markdown pages
  const posts = result.data.allMarkdownRemark.edges
  let blogPostsCount = 0

  posts.forEach((post, index) => {
    const id = post.node.id
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node
    const {slug, template} = post.node.frontmatter

    if (slug && template) {
      // Skip alerts
      createPage({
        path: post.node.frontmatter.slug,
        component: path.resolve(
          `src/templates/${String(post.node.frontmatter.template)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
          previous,
          next,
        },
      })

      // Count blog posts.
      if (post.node.frontmatter.template === 'blog-post') {
        blogPostsCount++
      }
    }
  })

  // Create blog-list pages
  const postsPerPage = 9
  const numPages = Math.ceil(blogPostsCount / postsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/news` : `/news/${i + 1}`,
      component: blogList,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    if (node.frontmatter.leftcol) {
      remark()
        .use(html)
        .process(node.frontmatter.leftcol, function (err, file) {
          node.frontmatter.leftcol = String(file)
        })
      
    }
    if (node.frontmatter.rightcol) {
      remark()
        .use(html)
        .process(node.frontmatter.rightcol, function (err, file) {
          node.frontmatter.rightcol = String(file)
        })
    }
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}