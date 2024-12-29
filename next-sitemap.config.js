/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://zkratkolektiv.com",
  generateRobotsTxt: true,
  generateIndexSitemap: true,
};