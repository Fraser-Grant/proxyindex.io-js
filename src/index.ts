
const request = require('request-promise-native');

module.exports = async () =>{
    let data = await request("https://api.proxyindex.io/list")
    return JSON.parse(data);
}