export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Strip /institutional prefix before serving from assets
    if (url.pathname.startsWith('/institutional')) {
      url.pathname = url.pathname.replace('/institutional', '') || '/';
    }

    return env.ASSETS.fetch(new Request(url, request));
  },
};
