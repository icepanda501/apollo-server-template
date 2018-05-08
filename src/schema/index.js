import { readFileSync } from 'fs'

export default readFileSync(`${__dirname}/schema.gql`, 'utf8')