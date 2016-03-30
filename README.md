# url shortener microservice

Shorten URLs

## Getting started

* clone this repo
* `npm install`
* `node server.js`

## Usage

http://www.example.com/api/new/http://www.google.com

### Output

Return JSON

```JSON
{
    "origianl_url": "http://www.example.com", 
    "short_url": "http://www.example.com/BBSRH34"
}
```

## Additional Features

Link click count can be found by adding `/info` to the shortened URL. i.e. `http://www.example.com/BBSRH34/info`

http://www.example.com/BBSRH34/info

## TODO

* css