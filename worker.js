export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const isInstitutional = url.pathname.startsWith('/institutional');

    if (!isInstitutional) {
      return env.ASSETS.fetch(request);
    }

    // Strip /institutional prefix before serving from assets
    url.pathname = url.pathname.replace('/institutional', '') || '/';
    const response = await env.ASSETS.fetch(new Request(url.toString(), { method: request.method, headers: request.headers }));

    const contentType = response.headers.get('content-type') || '';
    if (contentType.includes('text/html')) {
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
