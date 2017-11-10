import React, { Component } from 'react'
import {
  Provider,
  Banner,
  Heading,
  Lead,
  Container,
  Flex,
  Box,
  Text,
  Subhead,
  Absolute,
  Link as A
} from 'rebass'
import theme, { colors, mx } from '../theme'
import { Head } from 'react-static'
import Nav from '../components/Nav'
import ApplicationForm from '../components/ApplicationForm'
import Footer from '../components/Footer'

const css = `
  body { background-color: #000; }
  *::selection {
    color: #fff;
    background-color: ${colors.green[6]};
  }
  #root > div, input {
    color: ${colors.green[6]} !important;
    font-family: ${theme.monospace} !important;
    letter-spacing: -.02em;
  }
  h1 {
    text-shadow: 0 0 2px ${colors.green[4]};
  }
  p, a, h2, label {
    color: ${colors.green[6]} !important;
  }
  input, select, textarea {
    border-radius: 0 !important;
    text-shadow: 0 !important;
  }
  select option {
    background-color: #000 !important;
  }
  input:not([type=submit]), select, textarea {
    background-color: transparent !important;
    box-shadow: inset 0 0 0 1px ${colors.green[6]} !important;
    padding: .75rem !important;
  }
  input:not([type=submit]):focus, select:focus, textarea:focus {
    box-shadow: inset 0 0 0 1px ${colors.green[6]},
      0 0 4px 1px ${colors.green[4]} !important;
  }
  .error {
    color: ${colors.error} !important;
    margin-left: .5rem !important;
    text-shadow: 0 0 1px ${colors.error} !important;
  }
  input[type=submit] {
    background-color: transparent;
    border: 2px solid ${colors.green[6]};
    line-height: 1;
    text-decoration: none;
    text-transform: uppercase;
    padding: .75rem 1rem;
    cursor: pointer;
  }
  footer {
    background: #111 !important;
  }
`

const Header = Box.extend.attrs({
  is: 'header',
  align: 'center',
  justify: 'center',
  direction: 'column',
  bg: 'transparent',
  p: 3
})`text-align: center;`

class ApplyRepl extends Component {
  constructor(props)  {
    super(props)

    this.state = {
      referrer: 'Loading...'
    }
  }

  componentDidMount() {
    if (!window) {return}

    const id = window.analytics.user()._getId()

    this.setState({
      referrer: (id ? `repl.it (user '${id}')` : 'repl.it (no user id)')
    })
  }

  render () {
    const { referrer } = this.state

    return (
      <Provider theme={theme}>
        <Head>
          <title>Apply – Hack Club</title>
        </Head>
        <style children={css} />
        <Header>
          <Nav />
          <Heading is="h1" f={[5, 6]} mt={4}>Apply to Hack Club</Heading>
        </Header>
        <ApplicationForm params={{referrer: referrer, start_date: (new Date().toISOString())}}  />
        <Footer />
      </Provider>
    )
  }
}

export default ApplyRepl
