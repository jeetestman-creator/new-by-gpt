import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://djgzstrstsiufwydopnr.supabase.co"
const supabaseKey = "sb_publishable_I1pzVUS9Ur-LJ3FGG1EbfA_9DwUy6vK"

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
)
