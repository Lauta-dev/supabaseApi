//import { createClient } from "@supabase/supabase-js";
require("dotenv").config();

// Configuracion para supabase
const opcionesSupabase = {
  db: {
    schema: "public",
  },
  auth: {
    autoRefreshToken: true,
    persistSession: false,
    detectSessionInUrl: true,
  },
};

// crear la conexión con supabase
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_API_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey, opcionesSupabase);

console.log(supabaseKey);
console.log(supabaseUrl);
