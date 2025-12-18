// Write a program that parses the given URL, Print protocol, hostname, pathname, and query parameters separately.

const myURL = 'https://www.example.com:8080/path/to/page?name=dhruv&age=18&city=Bhavnagar';

const url = new URL(myURL);

console.log("Protocol:", url.protocol);
console.log("Hostname:", url.hostname);
console.log("Port:", url.port);        
console.log("Pathname:", url.pathname);

url.searchParams.forEach((value,key)=>{
    console.log(key,value);
})