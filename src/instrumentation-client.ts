import * as Sentry from "@sentry/nextjs";

Sentry.init({
    dsn: "https://c1bd2768218a91fbfa7debd26127b967@o4509099513020416.ingest.us.sentry.io/4509904717676544",
    integrations: [
        Sentry.replayIntegration(),
    ],
    tracesSampleRate: 0.2,
    enableLogs: true,

    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
    debug: true,
});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;