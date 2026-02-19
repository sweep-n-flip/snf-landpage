export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Strip /institutional prefix before serving from assets
    if (url.pathname.startsWith('/institutional')) {
      url.pathname = url.pathname.replace('/institutional', '') || '/';
    }

    const response = await env.ASSETS.fetch(new Request(url, request));

    // For HTML responses, rewrite internal links to include /institutional prefix
    const contentType = response.headers.get('content-type') || '';
    if (contentType.includes('text/html')) {
      let html = await response.text();
      // Rewrite href="/..." and src="/..." to include /institutional prefix
      // But skip external URLs (http://, https://, //) and anchor links (#)
      html = html.replace(/(href|src|action)="\/(?!institutional|\/|http)/g, '$1="/institutional/');
      return new Response(html, {
        status: response.status,
        headers: response.headers,
      });
    }

    return response;
  },
};
