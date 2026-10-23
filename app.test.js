const http = require('http');

test('Server responds with the expected message', async () => {
    const server = http.createServer((req, res) => {
        res.end('Hello from DevOps Task 1!');
    });

    await new Promise((resolve) => server.listen(0, resolve));

    const port = server.address().port;

    const response = await fetch(`http://localhost:${port}`);
    const text = await response.text();

    expect(response.status).toBe(200);
    expect(text).toBe('Hello from DevOps Task 1!');

    await new Promise((resolve, reject) => {
        server.close((error) => error ? reject(error) : resolve());
    });
});