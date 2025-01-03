import * as Sentry from "@sentry/nextjs";

export function register() {
  // Server-side initialization
  Sentry.init({
    dsn: "https://7b883d075caa19b41fd9b00ae313a1c6@o4506813739368448.ingest.us.sentry.io/4507222371729408",
    tracesSampleRate: 1,
    debug: false,
    // Uncomment this line if Spotlight is needed
    // spotlight: process.env.NODE_ENV === "development",
  });

  // Edge-specific initialization (middleware, edge routes, etc.)
  // You can reuse the same `dsn` or provide a different one if required.
  Sentry.init({
    dsn: "https://7b883d075caa19b41fd9b00ae313a1c6@o4506813739368448.ingest.us.sentry.io/4507222371729408",
    tracesSampleRate: 1,
    debug: false,
  });
}
