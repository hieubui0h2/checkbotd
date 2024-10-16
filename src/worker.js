addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  return new Response('Hello, this is a Cloudflare Worker!', {
    headers: { 'content-type': 'text/plain' },
  })
}
