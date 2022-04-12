import React, { Component } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

// Imports Netlify Identity script into HTML of site.
// Must be called from React life-cycle function. Will not work if called at GatsbyJS build-time.

function initNetlifyIdentity() {
  console.log("initNetlifyIdentity called")
  const script = document.createElement("script")

  script.src = "https://identity.netlify.com/v1/netlify-identity-widget.js"
  script.async = true

  document.body.appendChild(script)

}

function openNetlifyModal() {
  const netlifyIdentity = window.netlifyIdentity;

  if (netlifyIdentity) 
    netlifyIdentity.open();
  else 
    console.log("netlifyIdentity not defined");
  
}

class NetlifyIdentity extends Component {
  componentDidMount() {
    initNetlifyIdentity();
  }

  render() {
    return (<div></div>);
  }
}

const IndexPage = () => {
  return(
    <Layout>
      <NetlifyIdentity />
      <Seo title="Home" />
      <h1>Hi people</h1>
      <h2 onClick={() =>  {openNetlifyModal()}}>Login</h2>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
     <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p>
  </Layout>
)
 }

export default IndexPage
