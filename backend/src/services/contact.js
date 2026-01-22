function isNonEmptyString(v) {
  return typeof v === "string" && v.trim().length > 0;
}

function isValidEmail(v) {
  if (typeof v !== "string") return false;
  const s = v.trim();
  // Simple pragmatic email validation
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

class ContactService {
  submit(payload) {
    const name = payload?.name;
    const email = payload?.email;
    const subject = payload?.subject;
    const message = payload?.message;

    if (!isNonEmptyString(name)) {
      return { ok: false, message: "Please enter your name." };
    }
    if (!isNonEmptyString(email)) {
      return { ok: false, message: "Please enter your email." };
    }
    if (!isValidEmail(email)) {
      return { ok: false, message: "Please enter a valid email." };
    }
    if (!isNonEmptyString(subject)) {
      return { ok: false, message: "Please enter a subject." };
    }
    if (!isNonEmptyString(message)) {
      return { ok: false, message: "Please enter a message." };
    }
    if (message.trim().length < 10) {
      return { ok: false, message: "Message should be at least 10 characters." };
    }

    // Demo behavior: accept the message and log server-side.
    // In production, integrate an email provider or ticketing system here.
    // Never log sensitive content in real systems without consent.
    console.log("[contact] message received:", {
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      messagePreview: message.trim().slice(0, 120),
    });

    return { ok: true, message: "Message received. Thank you!" };
  }
}

module.exports = new ContactService();
