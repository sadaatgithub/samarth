import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: '3hia4aa6', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  apiVersion: '2021-10-21',
  useCdn: false // `false` if you want to ensure fresh data
})