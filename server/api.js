const express = require('express')
const app = express()
app.get('/api/courses', (req, res)=>{
  setTimeout(() => {
    res.json(
      [
        {
        name: 'serverapi-1',
        id:'11'
        },
        {
          name: 'serverapi-2',
          id:'22'
          }
      ]
    )
  }, 1000);
})
app.listen(4040)