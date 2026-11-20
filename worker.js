// Cloudflare Worker per sincronizzazione Codice Famiglia e Webhook Alexa
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const cors = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    };
    if (request.method === 'OPTIONS') return new Response(null, { headers: cors });

    const family = url.searchParams.get('family') || 'DEFAULT';
    const key = 'family:' + family;

    if (url.pathname === '/alexa-webhook' && request.method === 'POST') {
      const payload = await request.json().catch(() => ({}));
      const item = payload.item || payload.name || 'Articolo Alexa';
      const existing = (await env.FRIGOSCAN_KV?.get(key, 'json')) || { items: [], shopping: [] };
      existing.shopping.unshift({ id: 'alexa_' + Date.now(), name: item, checked: false, source: 'alexa' });
      if (env.FRIGOSCAN_KV) await env.FRIGOSCAN_KV.put(key, JSON.stringify(existing));
      return new Response(JSON.stringify({ ok: true, added: item }), { headers: { ...cors, 'Content-Type': 'application/json' } });
    }

    if (request.method === 'GET') {
      const data = (await env.FRIGOSCAN_KV?.get(key, 'json')) || null;
      return new Response(JSON.stringify({ ok: true, data }), { headers: { ...cors, 'Content-Type': 'application/json' } });
    }

    if (request.method === 'POST') {
      const body = await request.json();
      if (env.FRIGOSCAN_KV) await env.FRIGOSCAN_KV.put(key, JSON.stringify(body));
      return new Response(JSON.stringify({ ok: true }), { headers: { ...cors, 'Content-Type': 'application/json' } });
    }

    return new Response('FrigoScan Sync Worker attivo', { headers: cors });
  }
};