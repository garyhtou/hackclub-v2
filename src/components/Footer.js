import React from 'react'
import {
  Flex,
  Box,
  Heading,
  Text,
  Link as A,
  cx
} from '@hackclub/design-system'
import Link from 'gatsby-link'

const Base = Box.footer.extend`
  background: ${props => props.theme.colors.snow} url('/pattern.svg') repeat;
  display: grid;
  grid-gap: ${props => props.theme.space[3]}px;
  ${props => props.theme.mediaQueries.md} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${props => props.theme.space[4]}px;
  }
`

const icons = {
  slack:
    'M6.586 7.33l.69 2.057 2.137-.716-.69-2.05-2.137.72z M12.55 9.37l-1.037.347.36 1.073c.145.434-.09.904-.524 1.05-.1.03-.19.045-.29.042-.34-.01-.65-.226-.77-.566l-.36-1.072-2.14.716.36 1.072c.14.435-.09.905-.53 1.05-.1.032-.19.045-.29.043-.34-.01-.65-.226-.77-.566l-.36-1.08-1.04.35c-.1.03-.19.04-.29.04-.34-.01-.65-.23-.77-.57-.15-.44.09-.91.52-1.05l1.04-.35L5 7.84l-1.034.35c-.094.032-.19.045-.285.043-.33-.01-.65-.225-.76-.565-.14-.433.09-.903.53-1.05l1.04-.346-.36-1.07c-.14-.436.09-.906.53-1.05.44-.147.91.09 1.05.522l.36 1.072L8.2 5.03l-.36-1.07c-.14-.43.09-.9.526-1.05.435-.14.906.09 1.05.528l.36 1.08 1.037-.34c.434-.146.904.09 1.05.52.145.436-.09.906-.523 1.05l-1.038.35.69 2.057 1.034-.344c.435-.14.905.09 1.05.53.146.44-.09.91-.52 1.05zm2.78-3.57C13.68.304 11.298-.98 5.8.67.304 2.32-.98 4.7.67 10.2c1.65 5.497 4.03 6.78 9.53 5.13 5.497-1.65 6.78-4.03 5.13-9.53z ',
  twitter:
    'M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.37-1.337.64-2.085.79-.598-.64-1.45-1.04-2.396-1.04-1.812 0-3.282 1.47-3.282 3.28 0 .26.03.51.085.75-2.728-.13-5.147-1.44-6.766-3.42C.83 2.58.67 3.14.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.41-.02-.61-.058.42 1.304 1.63 2.253 3.07 2.28-1.12.88-2.54 1.404-4.07 1.404-.26 0-.52-.015-.78-.045 1.46.93 3.18 1.474 5.04 1.474 6.04 0 9.34-5 9.34-9.33 0-.14 0-.28-.01-.42.64-.46 1.2-1.04 1.64-1.7z ',
  github:
    'M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.09-.202-.36-1.015.07-2.117 0 0 .67-.215 2.2.82.64-.178 1.32-.266 2-.27.68.004 1.36.092 2 .27 1.52-1.035 2.19-.82 2.19-.82.43 1.102.16 1.915.08 2.117.51.56.82 1.274.82 2.147 0 3.073-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38C13.71 14.53 16 11.53 16 8c0-4.418-3.582-8-8-8 ',
  instagram:
    'M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42c-.526.204-.973.478-1.417.923-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.72 1.417.923.51.198 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.852-.04 1.433-.174 1.942-.372.526-.204.973-.478 1.417-.923.445-.444.72-.89.923-1.417.198-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942-.204-.526-.478-.973-.923-1.417-.444-.445-.89-.72-1.417-.923-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.05 3.233c-.04.78-.17 1.203-.28 1.485-.15.374-.32.64-.6.92-.28.28-.55.453-.92.598-.28.11-.71.24-1.49.276-.85.038-1.1.047-3.24.047s-2.39-.01-3.24-.05c-.78-.04-1.21-.17-1.49-.28-.38-.15-.64-.32-.92-.6-.28-.28-.46-.55-.6-.92-.11-.28-.24-.71-.28-1.49-.03-.84-.04-1.1-.04-3.23s.01-2.39.04-3.24c.04-.78.17-1.21.28-1.49.14-.38.32-.64.6-.92.28-.28.54-.46.92-.6.28-.11.7-.24 1.48-.28.85-.03 1.1-.04 3.24-.04zm0 2.452c-2.27 0-4.108 1.84-4.108 4.108 0 2.27 1.84 4.108 4.108 4.108 2.27 0 4.108-1.84 4.108-4.108 0-2.27-1.84-4.108-4.108-4.108zm0 6.775c-1.473 0-2.667-1.194-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667 0 1.473-1.194 2.667-2.667 2.667zm5.23-6.937c0 .53-.43.96-.96.96s-.96-.43-.96-.96.43-.96.96-.96.96.43.96.96z ',
  facebook:
    'M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.48-1.195 1.18v1.54h2.39l-.31 2.42h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0 ',
  mail:
    'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z '
}

const Service = ({ href, icon, ...props }) => (
  <A
    target="_blank"
    rel="noopener"
    href={href}
    mx={2}
    color="muted"
    title={icon}
    {...props}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={32}
      height={32}
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="1.414"
    >
      <path fillRule="nonzero" d={icons[icon]} />
    </svg>
  </A>
)

const Exception = Box.extend`
  grid-column: span 2;
`

const Footer = ({ children }) => (
  <Base p={[4, 5]}>
    {children && <Exception children={children} />}
    <Heading.h3 bold m={0} align={['left', null, 'right']}>
      Join the Club
    </Heading.h3>
    <Flex align="center" mx={-2} wrap>
      <Service href="/slack_invite" icon="slack" />
      <Service href="https://twitter.com/starthackclub" icon="twitter" />
      <Service href="https://github.com/hackclub" icon="github" />
      <Service
        href="https://www.instagram.com/starthackclub"
        icon="instagram"
      />
      <Service
        href="https://www.facebook.com/Hack-Club-741805665870458"
        icon="facebook"
      />
      <Service href="mailto:team@hackclub.com" icon="mail_outline" />
    </Flex>
    <Heading.h3 bold m={0} align={['left', null, 'right']}>
      Hack Club HQ
    </Heading.h3>
    <Box>
      <Text m={0}>
        576 Natoma St<br />San Francisco, CA 94103
      </Text>
      <Text my={2}>Nonprofit EIN: 81-2908499</Text>
      <Text my={2}>
        <A href="https://conduct.hackclub.com" color="info" underline>
          Read our Code of Conduct
        </A>
      </Text>
      <Text f={1} color="muted" m={0}>
        © {new Date().getFullYear()} Hack Club
      </Text>
    </Box>
  </Base>
)

export default Footer
