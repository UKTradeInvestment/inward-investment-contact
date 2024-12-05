'use strict';

var port = (process.env.PORT || 8080);

/* eslint no-process-env: 0*/
module.exports = {
  env: process.env.NODE_ENV,
  port: port,
  listenHost: process.env.LISTEN_HOST || '0.0.0.0',
  trackingId: process.env.TRACKING_ID,
  feedbackEmail: process.env.FEEDBACK_EMAIL_ADDRESS,
  postcodeApi: process.env.POSTCODE_API || 'http://api.postcodes.io/postcodes',
  companiesHouse: {
    url: process.env.COMPANIES_HOUSE_URL || 'https://api.companieshouse.gov.uk',
    key: process.env.COMPANIES_HOUSE_KEY,
    ttl: (process.env.COMPANIES_HOUSE_TTL || (60 * 60 * 1)),
    timeout: (process.env.COMPANIES_HOUSE_TIMEOUT || 4000)
  },
  auth: {
    use: process.env.USE_AUTH,
    user: process.env.AUTH_USER,
    pass: process.env.AUTH_PASS,
  },
  session: {
    secret: process.env.SESSION_SECRET || 'howdoesyourgardengrow',
    // 30 mins timeout
    ttl: process.env.SESSION_TTL || (30 * 60 * 1000)
  },
  redis: {
    url: process.env.REDIS_URL || 'redis://localhost:6379',
    useTLS: process.env.REDIS_USE_TLS || false
  },
  logLevel: process.env.LOG_LEVEL || 'warn',
  sentry: {
    dsn: process.env.SENTRY_DSN
  },
  zendesk: {
    url: process.env.ZENDESK_URL || 'https://uktrade.zendesk.com/api/v2',
    key: process.env.ZENDESK_API_KEY,
    email: process.env.ZENDESK_EMAIL || 'tools+contact-dit@digital.trade.gov.uk',
    tag: process.env.ZENDESK_TAG || 'contact-dit',
    // contact-dit group
    group: process.env.ZENDESK_GROUP || '26284869'
  },
  email: {
    caseworker: {
      blindCopy: process.env.CASEWORKER_BCC_EMAIL,
      default: process.env.CASEWORKER_DEFAULT_EMAIL || 'enquiries@ukti.gsi.gov.uk',
      investment: process.env.CASEWORKER_INVESTMENT_EMAIL || 'enquiries@ukti-invest.com',
      bizops: process.env.CASEWORKER_BIZOPS_EMAIL || 'bizoppteam@ukti.gov.uk',
      dso: process.env.CASEWORKER_DSO_EMAIL || 'uktidso.enquiry@ukti.gsi.gov.uk',
      events: process.env.CASEWORKER_EVENTS_EMAIL || 'enquiries@ukti.gsi.gov.uk',
      financeHelp: process.env.CASEWORKER_FINANCE_EMAIL || 'marketing@ukexportfinance.gov.uk'
    },
    port: process.env.EMAIL_PORT || 1025,
    host: process.env.EMAIL_HOST || 'localhost',
    auth: {
      user: process.env.SMTP_USER || '',
      pass: process.env.SMTP_PASSWORD || ''
    },
    from: process.env.FROM_ADDRESS || 'Department for International Trade <no-reply@contactus.trade.gov.uk>'
  },
  // webdriverio
  webdriver: {
    baseUrl: process.env.WDIO_BASEURL || ('http://localhost:' + port)
  },
  // heroku releases
  release: process.env.HEROKU_RELEASE_VERSION || null
};
