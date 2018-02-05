import React from 'react'
import styled, { withComponent } from 'styled-components'
import { parse, H1, H2, H3, P, Container, Link, Button, ButtonLink, Image } from '../components/Styled'
import { SmallMedium } from '../components/SVG'
import Location from '../components/Map'

const Intro = Container.withComponent('section').extend`
  p {
    font-size: 130%;
    line-height: 1.623;
  }
`

const About = Container.withComponent('section').extend`
  &.hidden {
    display: none;
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
    padding: .5em 20px;
  }
`

class HomePage extends React.Component {
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
    Sections.push( <Intro key="intro" scheme="dark">
      <Container align="center" constrain="600px" pad>
        <H1 margins={{top: '0px', bottom: '1em'}}>{data.site.siteMetadata.title}</H1>
        {parse(data.intro.html)}
        {this.state.showAbout
          ? null
          : <Button onClick={() => this.setState({ showAbout: true })}>Find out more</Button>
        }
      </Container>
    </Intro> )

    // About
    Sections.push( <About id="about" key="about" scheme="green" className={this.state.showAbout ? '' : 'hidden'}>
      <Container constrain="640px" pad>
        <H2>{data.about.frontmatter.title}</H2>
        {parse(data.about.html)}
        {this.state.showAbout
          ? <Button onClick={() => this.setState({ showAbout: false })}>Close</Button>
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
          <ButtonLink>Sign up</ButtonLink>
        </div>
        <div className="column">
          <Location coords={{ lat: 53.4084979, lng: -2.9915613 }} />
        </div>
      </Container>
    </Event> )

    // Blog
    Sections.push( <Container id="blog" key="blog" scheme="green">
      <Container pad constrain>
        <H2 align="center">Our thoughts</H2>
      </Container>
      <Container constrain columns pad>
        {data.blog.edges.map( post => post.node ).map( post => <BlogPost key={post.id}>
          <Link href={`${data.site.siteMetadata.medium}/${post.uniqueSlug}`}>
            {post.virtuals.previewImage.imageId && <Image src={`https://cdn-images-1.medium.com/max/1000/${post.virtuals.previewImage.imageId}`} />}
            <H3 className="title">{post.title}</H3>
          </Link>
        </BlogPost> )}
      </Container>
      <Container pad align="center">
        <ButtonLink href={data.site.siteMetadata.medium}>
          See all posts on <SmallMedium title="Medium" colour="green" />
        </ButtonLink>
      </Container>
    </Container> )

    // Team


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
