/* ============================================================
   Configuración del sitio — antes controlada por el panel de
   tweaks del prototipo (solo funcionaba dentro de Claude Design).
   status: 'available' | 'limited' | 'closed'
   (pendiente: sincronizar desde Supabase — ver README)
   ============================================================ */

export const SITE = {
  status: 'available',
  logoStyle: 'ae', // 'ae' => [AE] (provisional, branding pendiente) | 'nombre'
  fontPair: 'geist', // 'geist' | 'inter'
  customCursor: true
};
