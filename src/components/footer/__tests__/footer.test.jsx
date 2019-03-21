import React from 'react'
import { shallow, mount } from 'enzyme'
import { Footer } from '../footer'
import ListLink from '../listlink'

describe('Footer tests', () => {
  const props = {
    footerLinks: [
      { name: 'twitter', address: 'https://twitter.com' },
      { name: 'dribble', address: 'https://dribbble.com/' },
      { name: 'facebook', address: 'https://facebook.com' },
    ],
  }

  test('renders correctly', () => {
    const footer = shallow(<Footer {...props} />)
    expect(footer).toMatchSnapshot()
  })

  test('menu should render links', () => {
    const footer = shallow(<Footer {...props} />)
    expect(footer.find(ListLink)).toHaveLength(3)
  })

  test('menu link renders correctly', () => {
    const footer = mount(<Footer {...props} />)

    
    expect(
      footer
        .find(ListLink)
        .at(0)
        .text()
    ).toEqual('Twitter')
  })
})

/*
1. Snapshot
2. Testing props. 
3. Testing data types (optional) - jest-extended 
4. Event Testing
5. Testing state

6.Check test coverage
*/
