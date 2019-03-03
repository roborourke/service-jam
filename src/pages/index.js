import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import { parse, H1, H2, H3, P, Container, Link, ButtonLink, ButtonAnchor, Image } from '../components/Styled'
import { SmallMedium } from '../components/SVG'
import Location from '../components/Map'
import Member from '../components/Team/Member'

const Intro = styled(Container)`
  p {
    font-size: 130%;
    line-height: 1.623;
  }
`

const About = styled(Container)`
  overflow: hidden;
  &.hidden {
    height: 0;
  }
`

const Event = Container

const BlogPost = styled.article`
  position: relative;
  flex: 1;
  width: 50%;
  min-width: 300px;
  margin: 10px;
  a {
    text-decoration: none;
    display: block;
  }
  .title {
    background: ${props => props.theme.colours.darkBlue};
    color: ${props => props.theme.colours.white};
    text-decoration: none;
    margin: 0;
    padding: .75em 20px;
  }
`

class IndexPage extends React.Component {
  constructor() {
    super()

    this.state = {
      showAbout: false
    }
  }

  render() {
    const { data } = this.props;

    const Sections = [];

    // Intro
    Sections.push( <Intro key="intro" id="intro" scheme="dark" as="section">
      <Container align="center" constrain="600px" pad>
        <H1 margins={{top: '0px', bottom: '1em'}}>{data.site.siteMetadata.title}</H1>
        {parse(data.intro.html)}
        {/* eslint-disable-next-line */}
        <a id="about" />
        {this.state.showAbout
          ? null
          : <ButtonAnchor className="open-about" href="#about" onClick={() => this.setState({showAbout: true})}>Find out more</ButtonAnchor>
        }
      </Container>
    </Intro> )

    // About
    Sections.push( <About key="about" scheme="paleGreen" className={this.state.showAbout ? '' : 'hidden'} as="section">
      <Container className="content" constrain="640px" pad>
        <H2>{data.about.frontmatter.title}</H2>
        {parse(data.about.html)}
        <ButtonAnchor href="#home" onClick={() => { this.setState({ showAbout: false }) }}>Close</ButtonAnchor>
      </Container>
    </About> )

    // Event
    Sections.push( <Event id="event" key="event" as="section">
      <Container constrain columns={2} pad="2em 20px 1em">
        <div className="column">
          <H2 margins={{top: '0px'}}>Next event</H2>
          <H3>Liverpool Service Jam</H3>
          <P>29-31st March 2019</P>
          <P>Findout Research Lab at DoES Liverpool<br />
            The Tapestry<br />
            68 - 76 Kempston St<br />
            Liverpool<br />
            L3 8HL<br />
          </P>
          <ButtonLink href="https://www.eventbrite.co.uk/e/liverpool-service-jam-2019-tickets-57092502211">Sign up today</ButtonLink>
        </div>
        <div className="column">
          <Location coords={{ lat: 53.4105372, lng: -2.9725723 }} />
        </div>
      </Container>
    </Event> )

    // Blog
    Sections.push( <Container id="blog" key="blog" scheme="paleGreen" as="section">
      <Container pad constrain>
        <H2 align="center">Our thoughts</H2>
      </Container>
      <Container constrain columns pad>
        {data.blog.edges.map( post => post.node ).map( post => <BlogPost key={post.id}>
          <Link href={`${data.site.siteMetadata.medium}/${post.uniqueSlug}`}>
            {post.virtuals.previewImage.imageId && <Image src={`https://cdn-images-1.medium.com/max/600/${post.virtuals.previewImage.imageId}`} />}
            <H3 className="title">{post.title}</H3>
          </Link>
        </BlogPost> )}
      </Container>
      <Container pad align="center">
        <ButtonLink href={data.site.siteMetadata.medium}>
          See all posts on <SmallMedium title="Medium" />
        </ButtonLink>
      </Container>
    </Container> )

    // Team
    Sections.push( <Container id="the-team" key="the-team" scheme="green" as="section">
      <Container pad constrain>
        <H2 align="center">Meet the team</H2>
      </Container>
      <Container scheme="white" margins={{top: '150px'}}>
        <Container constrain columns={5} pad style={{position: 'relative', top: '-130px'}}>
          {data.team.frontmatter.team.map( member => <Member key={member.name} {...member} /> )}
        </Container>
      </Container>
    </Container> )

    return <Layout data={data}>{Sections}</Layout>
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
        twitter
        medium
        instagram
        email
      }
    }
    intro: markdownRemark(fileAbsolutePath: { regex: "/intro/" }) {
      html
    }
    about: markdownRemark(fileAbsolutePath: { regex: "/about/" }) {
      frontmatter {
        title
      }
      html
    }
    team: markdownRemark(fileAbsolutePath: { regex: "/the-team/" }) {
      frontmatter {
        title
        team {
          name
          bio
          job
          image {
            publicURL
            resized: childImageSharp {
              resize(width: 400, height: 400) {
                src
              }
              sizes(maxWidth: 600) {
                ...GatsbyImageSharpSizes_withWebp
              }
              resolutions(width: 400, height: 400) {
                ...GatsbyImageSharpResolutions_withWebp
              }
            }
          }
        }
      }
      html
    }
    blog: allMediumPost(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          title
          uniqueSlug
          virtuals {
            subtitle
            previewImage {
              imageId
            }
          }
          author {
            name
          }
        }
      }
    }
  }
`

export default IndexPage
