// Optional mappings of URL path to filesystem listing path.
module.exports = {
  // Serve /examples/ on main page.
  '/': '/docs',

  // Serve root on /~ as a fallback for main page.
  '/~': '/',
};
