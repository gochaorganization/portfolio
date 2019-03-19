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

  it('checks addImage action', () => {
    const expectedAction = {
      type: ADD_IMAGE,
      payload: image,
    }

    expect(addImage(image)).toEqual(expectedAction)
  })

  it('checks if addImage is working', () => {
    const testImages = portfolio(state, addImage(image))
    console.log(testImages)
    expect(testImages).toEqual({
      images: [{ ...image, id: 1 }],
    })
  })
})
