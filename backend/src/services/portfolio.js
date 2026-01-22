class PortfolioService {
  get() {
    // Keep this minimal; frontend currently hardcodes content.
    return {
      name: "Your Name",
      role: "Software Engineer",
      sections: ["about", "projects", "skills", "resume", "contact"],
      updatedAt: new Date().toISOString(),
    };
  }
}

module.exports = new PortfolioService();
