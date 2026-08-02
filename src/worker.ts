/// <reference types="@cloudflare/workers-types" />

// Astro's request handler plus EmDash's scheduled publishing and maintenance.
// PluginBridge is intentionally not exported: the free Workers plan disables
// Dynamic Worker Loaders and sandboxed marketplace plugins.
import emdashWorker from "@emdash-cms/cloudflare/worker";

const ADMIN_HOST = "admin.helpmebe.me";
const PUBLIC_HOST = "helpmebe.me";
const WWW_HOST = "www.helpmebe.me";
const ADMIN_PATH = "/_emdash/admin";

export default {
  ...emdashWorker,
  async fetch(request, env, context) {
    const url = new URL(request.url);

    if (url.hostname === WWW_HOST) {
      return Response.redirect(`https://${PUBLIC_HOST}${url.pathname}${url.search}`, 301);
    }

    if (url.hostname === ADMIN_HOST && url.pathname === "/") {
      return Response.redirect(`https://${ADMIN_HOST}${ADMIN_PATH}/`, 302);
    }

    // Keep the CMS on the dedicated admin hostname. EmDash uses the apex as
    // its canonical site URL so public links and passkeys remain stable.
    if (url.hostname === PUBLIC_HOST && url.pathname.startsWith(ADMIN_PATH)) {
      return Response.redirect(`https://${ADMIN_HOST}${url.pathname}${url.search}`, 302);
    }

    return emdashWorker.fetch!(request, env, context);
  },
} satisfies ExportedHandler;
