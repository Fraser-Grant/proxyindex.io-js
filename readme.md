#Proxyindex.io
Node package to easily integrate with the rest API

## Example usage with Request
``` javascript
const proxyindex = require('proxyindex');
const request = require('request-promise-native');

async function startRequests(){
    //Grab the list of proxies
    let proxyCache = await proxyindex();
    //For each one send a request through it    
    for (const element of proxyCache) {
        let options = {
            url:"http://example.com",
            proxy:`${element.protocol}://${element.ip}:${element.port}`
        }
        request(options).then((data)=>{
            //Data returned should be the same accross the board
            if(data.length ==1270){
                console.log(`${element.protocol}://${element.ip}:${element.port}: Works`); 
            }else{
                //If not check what happened
                console.log(data);
            }         
        }).catch((data)=>{
            //Sometimes its no longer alive or other issues may have occured such as timeout
            console.log(`${element.protocol}://${element.ip}:${element.port}: Has issues`);            
        });
    }    
}
startRequests();

```
It is best pratice to cache the results from the API to reduce server load and opens up the balancing options of the requests quite a bit