import path from 'path'
import { fileURLToPath } from 'url'


const fileName = fileURLToPath(import.meta.url)
const directoryName = path.dirname(fileName)

export default [
  { find: '@', replacement: path.resolve(directoryName, '../src')}
]