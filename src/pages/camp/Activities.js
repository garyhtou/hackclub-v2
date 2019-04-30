import React from 'react'
import styled from 'styled-components'
import {
  BackgroundImage,
  Box,
  Flex,
  Container,
  Icon,
  Sheet,
  Text
} from '@hackclub/design-system'
import { Link } from 'gatsby'
import { Section, SectionTitle, Cols, theme } from './style'
import { Headline, Subhline, Featline, Title, Lead } from 'components/Content'
import Photo from 'components/Photo'
import Schedule from './Schedule'

const Module = ({ icon, name, body, color = 'white', ...props }) => (
  <Flex flexDirection="column" color={color} {...props}>
    {icon && (
      <Icon
        size={64}
        mb={2}
        glyph={icon}
        color={props.iconColor || color}
        style={{ flexShrink: 0 }}
      />
    )}
    <Box>
      <Featline mb={1} children={name} />
      <Lead fontSize={3} children={body} />
    </Box>
  </Flex>
)
const ProjectOne = styled(Sheet)`
  background-color: ${theme.colors.red};
  background-image: ${theme.gradient(theme.colors.primary, theme.colors.red)};
`
const ProjectTwo = styled(Sheet)`
  background-color: ${theme.colors.green};
  background-image: ${theme.gradient(theme.colors.yellow, theme.colors.green)};
`
const ProjectThree = styled(Sheet)`
  background-color: ${theme.colors.blue};
  background-image: ${theme.gradient(theme.colors.cyan, theme.colors.blue)};
`

const Gallery = styled(Container).attrs({ maxWidth: 84, px: [3, 4] })`
  display: grid;
  grid-gap: ${theme.space[3]}px;
  ${theme.mediaQueries.md} {
    grid-template-columns: repeat(8, 1fr);
    > div {
      grid-column: span 4;
      min-height: 32rem;
      &[data-vertical] {
        grid-column: span 2;
      }
    }
  }
`

export default () => (
  <Section bg="darker" id="activities">
    <Container maxWidth={61.25} px={3}>
      <SectionTitle>Activities</SectionTitle>
      <Cols cols="1fr 2fr" mb={[4, 5]}>
        <Subhline>Camp is all about building.</Subhline>
        <Lead>
          Every day at Hack Camp you’ll go home with a new finished project. We
          want some projects to be a surprise, but here are a few you’ll
          certainly tackle:
        </Lead>
      </Cols>
    </Container>
    <Container px={3}>
      <Cols cols="1fr 1fr 1fr">
        <ProjectOne>
          <Module
            icon="web"
            name="Your First Website"
            body="The website you’re reading right now was built by
        us from scratch. We taught ourselves this stuff years ago—we’ll show you how to do the same."
          />
        </ProjectOne>
        <ProjectTwo>
          <Module
            icon="announcement"
            name="Your First Radio"
            body="A month ago, none of us knew anything about radios. We thought it would be cool to build one at Camp, so we learned how."
          />
        </ProjectTwo>
        <ProjectThree>
          <Module
            icon="challenge"
            name="Your First Game"
            body="Making a game is one of the best intros to code, & it’s easier than ever. Several of us started with games & became professional game devs!"
          />
        </ProjectThree>
      </Cols>
    </Container>
    <Container maxWidth={61.25} px={3}>
      <Cols mt={[5, 6]} mb={[6, 7]}>
        <div>
          <Featline>Coding? Just a starting point.</Featline>
          <Lead color="muted">
            Hack Camp is so much more than just “learn to code.” You’ll build a
            radio with a pencil, go on field trips, design games. There’s
            something for everyone.
          </Lead>
        </div>
        <div>
          <Featline>Better every day. Literally.</Featline>
          <Lead color="muted">
            To end each day, we’ll ask for honest feedback on all activities.
            We’ll update the next day’s program accordingly—so&nbsp;Camp
            continually improves.
          </Lead>
        </div>
      </Cols>
      <Headline mb={4}>A day in the life of Camp</Headline>
      <Schedule
        events={[
          { start: '7:30am', color: 'white', name: 'Wake up' },
          {
            start: '8:30am',
            length: 0.5,
            color: 'yellow',
            name: 'Travel to HQ'
          },
          { start: '9:00am', color: 'teal', name: 'Breakfast at HQ' },
          { start: '10:00am', length: 2, name: 'Hacker Workshop' },
          { start: '12:00pm', length: 0.5, name: 'Project Demos' },
          { start: '12:30pm', color: 'teal', name: 'Lunch' },
          { start: '1:30pm', length: 1, name: 'Speaker' },
          { start: '2:30pm', length: 2, name: 'Challenge' },
          {
            start: '5:00pm',
            length: 0.5,
            color: 'yellow',
            name: 'Travel to Home Base'
          },
          { start: '5:30pm', length: 1.5, color: 'teal', name: 'Cooking' },
          { start: '7:00pm', color: 'teal', name: 'Dinner' },
          { start: '8:00pm', length: 0.5, color: 'yellow', name: 'Cleanup' },
          { start: '9:00pm', color: 'white', name: 'Free Time' },
          { start: '11:00pm', length: 0.5, color: 'white', name: 'Bedtime' }
        ]}
      />
    </Container>
    <Container align="center" maxWidth={48} px={3}>
      <Headline color="white" mt={[6, 7]} mb={2}>
        Welcome to Hack Club HQ.
      </Headline>
      <Lead color="muted">
        We’re{' '}
        <Link style={{ color: theme.colors.red }} to="/">
          Hack Club
        </Link>
        , a global nonprofit network of high school hackers with coding clubs at
        2% of US high schools. We’re&nbsp;running Hack&nbsp;Camp right at our
        office in San Francisco (576 Natoma St) so we can X, Y, Z. Here’s the
        space.
      </Lead>
    </Container>
    <Gallery my={5}>
      <Photo
        src="/camp/street.jpg"
        alt="Natoma St, HQ on the left"
        dark
        data-vertical
      />
      <Photo
        src="/camp/neighborhood.jpg"
        alt="Neighborhood, two blocks from HQ"
        dark
      />
      <Photo
        src="/camp/classroom.jpg"
        alt="HQ’s classroom space"
        dark
        data-vertical
      />
      <Photo src="/camp/conference.jpg" alt="HQ’s conference room" dark />
      <Photo src="/camp/library.jpg" alt="HQ’s library" dark />
    </Gallery>
  </Section>
)
