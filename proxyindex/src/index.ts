
const request = require('request-promise-native');

module.exports = async () =>{
    return await JSON.stringify(request("https://api.proxyindex.io/list"));
}