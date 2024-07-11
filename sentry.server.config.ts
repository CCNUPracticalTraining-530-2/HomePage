import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: 'https://7b883d075caa19b41fd9b00ae313a1c6@o4506813739368448.ingest.us.sentry.io/4507222371729408',
  tracesSampleRate: 1,
  debug: false,
});
