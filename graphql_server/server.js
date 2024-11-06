const express = require("express")
const app = express()
const schema = require("./schema")
const {graphqlHTTP} = require("express-graphql")

// DB
const connectToDatabase = require("../dbConnection")
connectToDatabase()



app.use("/graphql", graphqlHTTP({
    schema: schema,
    graphiql: true
}))

app.listen(5000, () => console.log("Server is running"))