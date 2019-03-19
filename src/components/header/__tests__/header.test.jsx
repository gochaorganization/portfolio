import React from 'react'
import { shallow } from 'enzyme'
import { Header } from '../header'

describe('Header tests', () => {
  const props = {
    headerLinks: [
      { name: 'Blog', link: '#blog' },
      { name: 'Style Guide', link: '#guide' },
      { name: 'Manuals', link: '#manuals' },
      { name: 'Pages', link: '#pages' },
      { name: 'Contacts', link: '#contacts' },
    ],
  }

  test('renders correctly', () => {
    const wrapper = shallow(<Header {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  test('menu should render links', () => {
    const header = shallow(<Header {...props} />)
    expect(header.find('.header__list-link')).toHaveLength(5)
  })

  test('menu should be hidden', () => {
    const wrapper = shallow(<Header {...props} />)

    expect(wrapper.find('.header__list--hidden')).toHaveLength(1)
  })

  test('menu should be shown', () => {
    const wrapper = shallow(<Header {...props} />)
    wrapper.find('.header__menu').simulate('click')

    expect(wrapper.find('.header__list--hidden')).toHaveLength(0)
  })

  test('state menuVisible should change', () => {
    const wrapper = shallow(<Header {...props} />)
    wrapper.find('.header__menu').simulate('click')

    expect(wrapper.state().menuVisible).toBeTruthy()
  })

  //   test('dataTypes matches propTypes', () => {
  //     const wrapper = shallow(<Header {...props} />)
  //     wrapper.props.headerLinks.toBeArray()
  //   })
})

/*
1. Snapshot
2. Testing props. 
3. Testing data types (optional) - jest-extended 
4. Event Testing
5. Testing state

6.Check test coverage
*/
