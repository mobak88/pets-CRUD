const app = require('./app');

const url = process.env.URL || 'localhost';
const port = process.env.PORT || 8080;

app.listen((port), () => {
    console.log(`App running on: http://${url}:${port}`);
});