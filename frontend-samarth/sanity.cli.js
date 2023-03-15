import {defineCliConfig} from 'sanity/cli'


const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID // you can find this in sanity.json
const  dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  }
})
