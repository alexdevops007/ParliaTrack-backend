import cors from "cors";
import express, { Application, Express } from "express";
import helmet from "helmet";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express"
import swaggerDocument from "./docs/swagger.json"

import connectDatabase from "./config/database";
import debateRoutes from "./routes/debateRoutes";
import documentRoutes from "./routes/documentRoutes";
import eventRoutes from "./routes/eventRoutes";
import minutesRoutes from "./routes/minutesRoutes";
import orderOfBusinessRoutes from "./routes/orderOfBusinessRoutes";
import participantRoutes from "./routes/participantRoutes";

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.initializeMiddlewares();
    this.initializeRoutes();
    this.initializeDatabase();
    this.initializeSwaggerUI();
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
    this.app.get("/api", (req, res) => {
      res.status(200).json({
        message: "Bienvenue sur l'api ParliaTrack",
      });
    });

    this.app.use("/api", debateRoutes);
    this.app.use("/api", documentRoutes);
    this.app.use("/api", eventRoutes);
    this.app.use("/api", minutesRoutes);
    this.app.use("/api", orderOfBusinessRoutes);
    this.app.use("/api", participantRoutes);
  }

  private initializeDatabase(): void {
    connectDatabase();
  }

  private initializeSwaggerUI(): void {
    // Serve Swagger UI at /docs
    this.app.use(
      "/api/api-docs",
      swaggerUi.serve,
      swaggerUi.setup(swaggerDocument)
    );
  }
}

export default new App().app;
