const express = require('express');
const { userRouter } = require('./routes/user');
const { courseRouter } = require('./routes/course');
const { adminRouter } = require('./routes/admin');
const mongoose = require('mongoose');

const app = express();

const port = 3000;

app.use('/api/v1/user', userRouter);
app.use('/api/v1/course', courseRouter);
app.use('/api/v1/admin', adminRouter);

async function main(){
    await mongoose.connect("");
    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    })
}

main();
