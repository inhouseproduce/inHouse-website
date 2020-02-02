module.exports = app => {
    app.post('/test/', async (req, res) => {
        try {
            await axios.post('http://192.168.43.171:3000/', req.body);
            res.status(200).json();
        }
        catch (error) {
            console.log('error', error)
        };
    });
}