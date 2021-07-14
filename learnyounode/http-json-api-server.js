const http = require('http');

const parseTime = (time) => {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds(),
  };
};

const unixTime = (time) => {
  return { unixtime: time.getTime() };
};

http
  .createServer((req, res) => {
    const parseUrl = new URL(req.url, 'http://example.com');
    const time = new Date(parseUrl.searchParams.get('iso'));
    let results;
    if (/api\/parsetime/.test(req.url)) {
      result = parseTime(time);
    } else if (/api\/unixtime/.test(req.url)) {
      result = unixTime(time);
    }
    if (result) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(result));
    } else {
      res.writeHead(404);
      res.end();
    }
  })
  .listen(process.argv[2]);
