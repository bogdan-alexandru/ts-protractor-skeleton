exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['specs/**/*.ts'],

    onPrepare() {
        require('ts-node').register({
            project: 'tsconfig.json'
        })
    }
}

