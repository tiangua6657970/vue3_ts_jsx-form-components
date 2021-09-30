const Ajv = require('ajv')

const schema = {
  type: 'string',
  minLength: 10
}

const ajv = new Ajv()

const validata = ajv.compile(schema)

const valid = validata('tiangua')

if (!valid) {
  console.log(validata.errors)
}
