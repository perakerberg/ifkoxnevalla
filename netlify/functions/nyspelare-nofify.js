exports.handler = async (event) => {
  const fetch = (await import("node-fetch")).default;
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
      html: 'Ett nytt formulärsvar finns på Netlify. <a href="https://app.netlify.com/projects/steady-torrone-0448de/forms">Klicka här för att kontrollera</a>.',
    }),
  });

  return {
    statusCode: 200,
    body: "ok",
  };
};
