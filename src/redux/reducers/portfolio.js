import { ADD_IMAGE } from '../actions/actions'

const initalState = {
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
  footerLinks: [
    { name: 'twitter', address: 'https://twitter.com' },
    { name: 'dribble', address: 'https://dribbble.com/' },
    { name: 'facebook', address: 'https://facebook.com' },
  ],
  headerLinks: [
    { name: 'Blog', link: '#blog' },
    { name: 'Style Guide', link: '#guide' },
    { name: 'Manuals', link: '#manuals' },
    { name: 'Pages', link: '#pages' },
    { name: 'Contacts', link: '#contacts' },
  ],
}

function portfolio(state = initalState, action) {
  switch (action.type) {
    case ADD_IMAGE:
      console.log(action.payload)
      debugger
  }

  return state
}

export default portfolio
