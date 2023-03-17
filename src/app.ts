import express         from "express";
import campaignsRouter from "./components/campaigns/campaigns.router";
import donationsRouter from "./components/donations/donations.router";

export const initializeServer = () => {
  const app = express();
  app.use(express.json())
  app.use("/campaigns", campaignsRouter);
  app.use("/donations", donationsRouter)
  return app;
};
