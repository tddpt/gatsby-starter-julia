import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import "./layout.css"


const Container = styled.div`
  text-align: center;
`

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 78vh;
  margin-bottom: 2rem;
`

const Description = styled.p`
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  color: #BD476B;
`

const NameHeader = styled.h1`
  font-size: 2rem;
  margin-bottom: 0;
  color: #BD476B;
`



const LandingBio = () => (
  <StaticQuery
    query={graphql`
      query LandingSiteTitleQuery {
        site {
          siteMetadata {
            title
            subtitle
          }
        }
      }
    `}
    render={data => (
      <OuterContainer>
        <Container>
          <div>
             <img className="liberace"  src="images/liberace.svg" alt="liberace" />
          </div>
          <NameHeader>{data.site.siteMetadata.title}</NameHeader>
          <Description>{data.site.siteMetadata.subtitle}</Description>
        </Container>
      </OuterContainer>
    )}
  />
)

NameHeader.propTypes = {
  siteTitle: PropTypes.string,
  subtitle: PropTypes.string,
}

NameHeader.defaultProps = {
  siteTitle: ``,
  subtitle: ``,
}

export default LandingBio
