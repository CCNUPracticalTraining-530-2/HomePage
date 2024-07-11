/** @type {import('next').NextConfig} */

import { withSentryConfig } from '@sentry/nextjs';

const nextConfig = {};

export default withSentryConfig(
  nextConfig,
  {
    silent: true,
    org: 'javascript-mastery',
    project: 'javascript-nextjs',
  },
  {
    widenClientFileUpload: true,
    transpileClientSDK: true,
    hideSourceMaps: true,
    disableLogger: true,
    automaticVercelMonitors: true,
  }
);
