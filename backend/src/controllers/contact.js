const contactService = require("../services/contact");

class ContactController {
  /**
   * Handle contact submission.
   * Performs input validation and delegates persistence/dispatch logic to the service layer.
   */
  submit(req, res) {
    const result = contactService.submit(req.body);
    if (!result.ok) {
      return res.status(400).json({ status: "error", message: result.message });
    }
    return res.status(200).json({ status: "ok", message: result.message });
  }
}

module.exports = new ContactController();
