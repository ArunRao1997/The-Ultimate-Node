function myMiddleware(req, res, next){
    console.log('I am a custom middleware')
    next()
}

module.exports = myMiddleware