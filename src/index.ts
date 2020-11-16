import express from 'express'
// import color from 'colorts';
// import 'colorts/lib/string';
const app = express();
const port = 9000;

const one = 2
const two = 3

app.get('/', (_req, res) => res.send(` 1 + 2 = ${one + two}`));

app.listen(port);
console.log(`[app]: http://localhost:${port}`);
