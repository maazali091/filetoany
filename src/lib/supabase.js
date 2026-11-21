import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabasePublishableKey =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

export const supabase = createClient(
  supabaseUrl,
  supabasePublishableKey,
  {
    auth: {
      detectSessionInUrl: true,   // ✅ Reset link se session detect karega
      persistSession: true,        // ✅ Session localStorage mein save karega
      autoRefreshToken: true,      // ✅ Token auto refresh hoga
      flowType: 'pkce',            // ✅ Supabase ka recommended flow
    },
  }
)