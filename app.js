const express = require("express")
const mongoose = require("mongoose")

const app = express();

// connect to db
const dbURI = 'mongodb+srv://anonymous1803:vinod1803@lifters.t5ibjad.mongodb.net/lifters?retryWrites=true&w=majority'
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

 .then((result) => {
    app.listen(8080) 
    console.log("server started on port 8080")
    })
 .catch((err) => console.log('error connecting to db'))

//  middleware

 app.use(express.urlencoded({extended:true}))
 app.use(express.static("public"))
 app.set("view engine","ejs");

// routes
app.use(require("./routes/index"))
app.use(require("./routes/todo"))

// server config
// app.listen(8080, () => console.log("server started on port 8080"))