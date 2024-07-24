import StyleDictionary from 'style-dictionary-utils'

const config = {
  source: ['src/tokens/**/*.tokens.json'],
  platforms: {
    css: {
      buildPath: 'dist/styles/',
      transforms: ['attribute/cti', 'name/cti/kebab', 'color/rgba'],
      files: [
        {
          format: 'css/variables',
          destination: 'variables.css',
          filter: (token) => {
            // Exclude tokens based on the category
            return token.attributes.category !== 'composite'
          },
          options: {
            outputReferences: true,
          },
        },
        {
          format: 'css/utilities',
          destination: 'utilities.css',
        },
      ],
    },
  },
}

StyleDictionary.registerFormat({
  name: 'css/utilities',
  formatter: function (dictionary) {
    return dictionary.allProperties
      .filter((prop) => prop.attributes.category === 'composite')
      .map((prop) => {
        const className = `.${prop.attributes.type}`
        let properties = ''
        for (const key in prop.value) {
          properties += `${StyleDictionary.transform['name/cti/kebab'].transformer({ path: [key] }, { prefix: '' })}: ${prop.value[key]};`
        }
        return `${className} {
          ${properties}  
        }`
      })
      .join('\n')
  },
})

const sd = StyleDictionary.extend(config)
sd.buildAllPlatforms()
