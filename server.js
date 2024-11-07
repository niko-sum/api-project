const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const writers = {
    'john doe': {
        'age': 29,
        'demo': 'Kids & Family',
        'genre': 'Comedy, Action',
        'level': 'Junior'
    },
    'mary sue': {
        'age': 35,
        'demo': 'YA, Adult',
        'genre': 'Suspense, Mystery',
        'level': 'Senior'
    },
    'unknown': {
        'age': 'unknown',
        'demo': 'unknown',
        'genre': 'unknown',
        'level': 'unknown'
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res) => {
    const writerName = req.params.name.toLowerCase()
    if(writers[writerName]){
        res.json(writers[writerName])
    }else{
        res.json(writers['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The sever is now running on port ${PORT}! Betta go catch it!`)
})
