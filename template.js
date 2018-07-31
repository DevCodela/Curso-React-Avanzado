export default ({ ssr }) => {
  return `
    <html>
      <head>
        <title>Pokedex</title>
        <link rel="stylesheet" href="/static/css/app.css" />
        <link rel="preload" href="/static/js/app.js" as="script" />
      </head>
      <body>
        <div id="app">${ssr}</div>
        <script src="/static/js/app.js"></script>
      </body>
    </html>
  `
}
