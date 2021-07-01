const sanityClient = require('@sanity/client')
module.exports = sanityClient({
    projectId: '<#< sanity.projectId >#>',
    dataset: 'production',
    apiVersion: '2021-06-07',
    useCdn: true

})

