import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'


const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID // you can find this in sanity.json
const  dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

export default defineConfig({
  basePath:"/studio",
  name: 'default',
  title: 'samarth-physio',

  projectId,
  dataset,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
