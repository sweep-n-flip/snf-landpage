export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const isInstitutional = url.pathname.startsWith('/institutional');

    // Strip /institutional prefix before serving from assets
    if (isInstitutional) {
      url.pathname = url.pathname.replace('/institutional', '') || '/';
    }

    const response = await env.ASSETS.fetch(new Request(url, request));

    // Only rewrite links when accessed via /institutional
    const contentType = response.headers.get('content-type') || '';
    if (isInstitutional && contentType.includes('text/html')) {
      let html = await response.text();
      html = html.replace(/(href|src|action)="\/(?!institutional|_next|\/|http)/g, '$1="/institutional/');
      return new Response(html, {
        status: response.status,
        headers: response.headers,
      });
    }

    return response;
  },
};
