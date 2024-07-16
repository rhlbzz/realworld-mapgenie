import { transformerDirectives, presetWind } from 'unocss'
import { defineConfig } from 'unocss'

export default defineConfig({
  presets:[
    presetWind()
  ],
  transformers: [
    transformerDirectives()
  ]
})