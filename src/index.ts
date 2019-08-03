
const request = require('request-promise-native');

module.exports = async () =>{
    return await JSON.parse(request("https://api.proxyindex.io/list"));
}