import Express from 'express';

const app = Express();

app.get('/', (req, res) => {
    res.send("Hello word !");
});

app.post('/message', (req, res) => {
    if (!req.body) {
        return res.status(400).send('Request body is missing');
    };
    res.send('Hello Word !');
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});