import cors from "cors";
import express, { Application } from "express";
import helmet from "helmet";
import morgan from "morgan";

import connectDatabase from "./config/database";
import documentRoutes from "./routes/documentRoutes";
import minutesRoutes from "./routes/minutesRoutes";
import orderOfBusinessRoutes from "./routes/orderOfBusinessRoutes";

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.initializeMiddlewares();
    this.initializeRoutes();
    this.initializeDatabase();
  }

  private initializeMiddlewares(): void {
    this.app.use(cors());
    this.app.use(morgan("combined"));
    this.app.use(helmet());

    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use((req, res, next) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
      );
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
      );
      next();
    });
  }

  private initializeRoutes(): void {
    // Add your routes here
    this.app.get("/", (req, res) => {
      res.send("Bienvenue sur l'api ParliaTrack");
    });

    this.app.get("/api", (req, res) => {
      res.status(200).json({
        message: "Bienvenue sur l'api ParliaTrack",
      });
    });

    this.app.use("/api", documentRoutes);
    this.app.use("/api", minutesRoutes);
    this.app.use("/api", orderOfBusinessRoutes);
  }

  private initializeDatabase(): void {
    connectDatabase();
  }
}

export default new App().app;
