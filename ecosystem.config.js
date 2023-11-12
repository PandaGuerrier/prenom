module.exports = {
    apps: [
        {
            name: 'NuxtFront',
            port: '3000',
            exec_mode: 'cluster',
            instances: 'max',
            script: './frontend/.output/server/index.mjs'
        },
        {
            name: 'AdonisBack',
            port: '3333',
            exec_mode: 'cluster',
            instances: 'max',
            script: './backend/build/server.js'
        }
    ]
}
