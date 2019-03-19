import React from 'react'
import { shallow, mount } from 'enzyme'
import { Content } from '../content'
import PortfolioItem from '../portfolioItem'

describe('Content tests', () => {
  const props = {
    addImage: jest.fn(),
    images: [
      {
        id: 1,
        src: 'https://placekitten.com/380/380',
        title: 'Title',
        subtitle: 'subtitle',
      },
      {
        id: 2,
        src: 'https://loremflickr.com/500/500/dog',
        title: 'Title',
        subtitle: 'subtitle',
      },
      {
        id: 3,
        src: 'https://placekitten.com/360/360',
        title: 'Title',
        subtitle: 'subtitle',
      },
      {
        id: 4,
        src: 'https://loremflickr.com/320/320/dog',
        title: 'Title',
        subtitle: 'subtitle',
      },
      {
        id: 5,
        src: 'https://placekitten.com/370/370',
        title: 'Title',
        subtitle: 'subtitle',
      },
      {
        id: 6,
        src: 'https://placekitten.com/g/390/390',
        title: 'Title',
        subtitle: 'subtitle',
      },
      {
        id: 7,
        src: 'https://placekitten.com/g/360/360',
        title: 'Title',
        subtitle: 'subtitle',
      },
      {
        id: 8,
        src: 'https://loremflickr.com/330/330/dog',
        title: 'Title',
        subtitle: 'subtitle',
      },
      {
        id: 9,
        src: 'https://loremflickr.com/350/350/dog',
        title: 'Title',
        subtitle: 'subtitle',
      },
    ],
  }

  test('renders correctly', () => {
    const content = shallow(<Content {...props} />)
    expect(content).toMatchSnapshot()
  })

  test('content should render items', () => {
    const content = shallow(<Content {...props} />)
    expect(content.find(PortfolioItem)).toHaveLength(9)
  })

  test('form should be shown', () => {
    const wrapper = shallow(<Content {...props} />)
    wrapper.find('.content__button').simulate('click')

    expect(wrapper.find('.content__form--hidden').exists()).toBeFalsy()
  })

  test('state menuVisible should change', () => {
    const wrapper = shallow(<Content {...props} />)
    wrapper.find('.content__button').simulate('click')

    expect(wrapper.state().formVisible).toBeTruthy()
  })

  // test('state menuVisible should change', () => {
  //   const wrapper = mount(<Content {...props} />)
  //   wrapper.handleSubmit({
  //     src: 'https://loremflickr.com/350/350/dog',
  //     title: 'Title',
  //     subtitle: 'subtitle',
  //   })

  //   expect(wrapper.props.images).toHaveLength(9)
  // })
})

/*
1. Snapshot
2. Testing props. 
3. Testing data types (optional) - jest-extended 
4. Event Testing
5. Testing state
6.Check test coverage
*/
