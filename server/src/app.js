import express from "express";
import cors from "cors";
import { clerkMiddleware } from '@clerk/express'
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js"

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

app.get("/", (req, res) => {
    res.send("Server is running");
})

app.use("/api/inngest", serve({ client: inngest, functions }));



export default app;