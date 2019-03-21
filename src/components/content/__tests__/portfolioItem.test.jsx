import React from 'react'
import { shallow, mount } from 'enzyme'
import PortfolioItem from '../portfolioItem'

describe('PortfolioItem tests', () => {
  const props = {
    portfolio: {
      id: 1,
      src: 'https://placekitten.com/380/380',
      title: 'Title',
      subtitle: 'subtitle',
    },
  }

  it('renders correctly', () => {
    const content = shallow(<PortfolioItem {...props} />)
    expect(content).toMatchSnapshot()
  })

  test('renders title', () => {
    const content = shallow(<PortfolioItem {...props} />)

    expect(content.find('.portfolio-item__title').text()).toEqual(
      props.portfolio.title
    )
  })
})
