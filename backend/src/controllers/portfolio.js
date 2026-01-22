const portfolioService = require("../services/portfolio");

class PortfolioController {
  /**
   * Return portfolio content used by the frontend (if desired).
   */
  get(req, res) {
    const data = portfolioService.get();
    return res.status(200).json(data);
  }
}

module.exports = new PortfolioController();
