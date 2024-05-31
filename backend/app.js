import express from "express";
import themeRoutes from "./routes/themeRoutes.js";

const app = express(); // create express app instance

app.use(express.json()); // for parsing incoming json data

app.get("/", (req, res) => {
  // please use this route to test the server
  res.status(200).json({ message: "use /api/themes route to test the server" });
});
app.use("/api/themes", themeRoutes); // redirecting all requests to themeRoutes

app.listen(3000, () => {
  // server is listening on port 3000 click here http://localhost:3000
  console.log("Server is running on port 3000");
  console.log("http://localhost:3000");
});
