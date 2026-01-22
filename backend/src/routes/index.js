const express = require("express");
const healthController = require("../controllers/health");
const contactController = require("../controllers/contact");
const portfolioController = require("../controllers/portfolio");

const router = express.Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Health endpoint
 *     description: Returns service health status and environment metadata.
 *     responses:
 *       200:
 *         description: Service health check passed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: ok
 *                 message:
 *                   type: string
 *                   example: Service is healthy
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 *                 environment:
 *                   type: string
 *                   example: development
 */
router.get("/", healthController.check.bind(healthController));

/**
 * @swagger
 * /api/portfolio:
 *   get:
 *     summary: Get portfolio content
 *     description: Returns basic portfolio content (name, sections, projects, skills) for the frontend.
 *     responses:
 *       200:
 *         description: Portfolio content
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 role:
 *                   type: string
 *                 sections:
 *                   type: array
 *                   items:
 *                     type: string
 */
router.get("/api/portfolio", portfolioController.get.bind(portfolioController));

/**
 * @swagger
 * /api/contact:
 *   post:
 *     summary: Submit a contact form message
 *     description: Validates and accepts a contact form message. This demo implementation does not send email by default.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, email, subject, message]
 *             properties:
 *               name:
 *                 type: string
 *                 example: Jane Doe
 *               email:
 *                 type: string
 *                 example: jane@example.com
 *               subject:
 *                 type: string
 *                 example: Portfolio inquiry
 *               message:
 *                 type: string
 *                 example: Hi! I'd like to discuss a role...
 *     responses:
 *       200:
 *         description: Message accepted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: ok
 *                 message:
 *                   type: string
 *                   example: Message received. Thank you!
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: error
 *                 message:
 *                   type: string
 *                   example: Please enter a valid email.
 */
router.post("/api/contact", contactController.submit.bind(contactController));

module.exports = router;
