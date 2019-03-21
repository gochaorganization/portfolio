import React from 'react'
import { addImage, ADD_IMAGE } from 'redux/actions/actions'
import portfolio from 'redux/reducers/portfolio'

describe('redux tests', () => {
  const image = {
    src: 'https://loremflickr.com/350/350/dog',
    title: 'Title',
    subtitle: 'subtitle',
  }

  const state = {
    images: [],
  }

  it('should check addImage action', () => {
    const expectedAction = {
      type: ADD_IMAGE,
      payload: image,
    }

    expect(addImage(image)).toEqual(expectedAction)
  })

  it('should check if addImage is working', () => {
    const testImages = portfolio(state, addImage(image))
    expect(testImages).toEqual({
      images: [{ ...image, id: 1 }],
    })
  })

  it('should check initial state', () => {
    const otherActions = {
      type: 'OTHER',
      payload: {},
    }

    const testImages = portfolio(undefined, otherActions)
    expect(testImages.images).toHaveLength(9)
  })
})
