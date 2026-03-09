const fetch = require("node-fetch");

exports.handler = async (event) => {
  const RESEND_API_KEY = process.env.RESEND_API_KEY;

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Notifier <onboarding@resend.dev>",
      to: ["per.akerberg@live.se"],
      subject: "Ny spelare!",
      text: "Ett nytt formulärsvar finns på Netlify. Logga in och kontrollera.",
    }),
  });

  return {
    statusCode: 200,
    body: "ok",
  };
};
