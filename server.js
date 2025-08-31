const app = require("./app")
const mongoose = require("mongoose")
require("dotenv").config()

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Connected To MongoDB Atlas")

    const PORT = process.env.PORT || 3000

    app.listen(PORT, () => console.log(`Server running successfully on localhost:${PORT}`))

})
.catch(err =>  console.error(`MongoDB Connection Error ${err}`))