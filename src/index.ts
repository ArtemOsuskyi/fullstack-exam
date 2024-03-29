import { connection } from "./components/database/connection";
import { initializeServer } from "./app";
connection.connect(async () => {
  console.log("Database connected!");
  const app = initializeServer();
  app.listen(3000, () => {
    console.log("Listening on port 3000!");
  });
});
