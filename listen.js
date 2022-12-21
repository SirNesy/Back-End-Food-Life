const app = require("./app.js");
const { PORT = 9494 } = process.env;

app.listen(PORT, () => {
  console.log(`listen on ${PORT}`);
});
