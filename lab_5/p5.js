// Create a new URL object with base, then append pathname and query, also print the final URL

const baseURL = 'https://www.example.com:8080';

const url = new URL('/path/to/page', baseURL);

url.searchParams.append('name', 'dhruv');
url.searchParams.append('age', '18');
url.searchParams.append('city', 'Bhavnagar');

console.log("Protocol:", url.protocol);
console.log("Hostname:", url.hostname);
console.log("Port:", url.port);
console.log("Pathname:", url.pathname);
console.log("Query Params:", url.search);

console.log("Final URL:", url.toString());