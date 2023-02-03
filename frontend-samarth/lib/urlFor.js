import imageUrlBuilder from '@sanity/image-url'
import client from '@/sanity/client'


const urlFor = (source) => {
  return imageUrlBuilder(client).image(source)
}

export default urlFor