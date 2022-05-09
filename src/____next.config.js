module.exports = {
    webpackDevMiddleware: config => {
        config.watchOptions = {
            poll: 1000, // check for changes every x ms (1000ms = 1s)
            aggregateTimeout: 300, // add delay before rebuilding, this allows to aggregate other changes
        }
        return config
    },
}