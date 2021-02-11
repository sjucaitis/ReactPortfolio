
const routes = require("./routes");
const PORT = process.env.PORT || 3001;


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use('/', routes);
app.use('/', require('./routes/index'))


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
