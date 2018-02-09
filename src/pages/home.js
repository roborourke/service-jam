import React from 'react'
import styled, { withComponent } from 'styled-components'
import { parse, H1, H2, H3, P, Container, Link, Button, ButtonLink, Image } from '../components/Styled'
import { SmallMedium } from '../components/SVG'
import Location from '../components/Map'
import Member from '../components/Team/Member'

const Intro = Container.withComponent('section').extend`
  p {
    font-size: 130%;
    line-height: 1.623;
  }
`

const About = Container.withComponent('section').extend`
  overflow: hidden;
  &.hidden {
    height: 0;
  }
`

const Event = Container.withComponent('section')

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

class HomePage extends React.Component {
  constructor() {
    super()

    this.state = {
      showAbout: false
    }

    this.handleAboutHash = this.handleAboutHash.bind(this)
  }

  componentWillMount() {
    window.addEventListener( 'hashchange', this.handleAboutHash, false );
    this.handleAboutHash();
  }

  componentWillUnmount() {
    window.removeEventListener( 'hashchange', this.handleAboutHash );
  }

  handleAboutHash( event ) {
    if ( window.location.hash === '#about' ) {
      this.setState({ showAbout: true })
    }
  }

  render() {
    const { data } = this.props;

    const Sections = [];

    // Intro
    Sections.push( <Intro key="intro" id="intro" scheme="dark">
      <Container align="center" constrain="600px" pad>
        <H1 margins={{top: '0px', bottom: '1em'}}>{data.site.siteMetadata.title}</H1>
        {parse(data.intro.html)}
        {this.state.showAbout
          ? null
          : <ButtonLink href="#about">Find out more</ButtonLink>
        }
      </Container>
    </Intro> )

    // About
    Sections.push( <About id="about" key="about" scheme="paleGreen" className={this.state.showAbout ? '' : 'hidden'}>
      <Container constrain="640px" pad>
        <H2>{data.about.frontmatter.title}</H2>
        {parse(data.about.html)}
        {this.state.showAbout
          ? <Button onClick={() => { window.location.hash = ''; this.setState({ showAbout: false }) }}>Close</Button>
          : null
        }
      </Container>
    </About> )

    // Event
    Sections.push( <Event id="event" key="event">
      <Container constrain columns={2} pad>
        <div className="column">
          <H2 margins={{top: '0px'}}>Next event</H2>
          <H3>Liverpool Service Jam</H3>
          <P>9-11th March 2018</P>
          <P>Tempest Building, Liverpool</P>
          <ButtonLink href="https://www.eventbrite.co.uk/e/liverpool-service-jam-tickets-42722654610">Sign up</ButtonLink>
        </div>
        <div className="column">
          <Location coords={{ lat: 53.4084979, lng: -2.9915613 }} />
        </div>
      </Container>
    </Event> )

    // Blog
    Sections.push( <Container id="blog" key="blog" scheme="paleGreen">
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
    Sections.push( <Container id="the-team" key="the-team" scheme="green">
      <Container pad constrain>
        <H2 align="center">Meet the team</H2>
      </Container>
      <Container scheme="white" margins={{top: '150px'}}>
        <Container constrain columns={4} pad style={{position: 'relative', top: '-130px'}}>
          {data.team.frontmatter.team.map( member => <Member key={member.name} {...member} /> )}
        </Container>
      </Container>
    </Container> )

    return Sections
  }
}

export const pageQuery = graphql`
  query HomeQuery {
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
    intro: markdownRemark(id: { regex: "/intro/" }) {
      html
    }
    about: markdownRemark(id: { regex: "/about/" }) {
      frontmatter {
        title
      }
      html
    }
    team: markdownRemark(id: { regex: "/the-team/" }) {
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

export default HomePage
