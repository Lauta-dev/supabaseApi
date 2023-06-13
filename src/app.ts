import { createClient } from "@supabase/supabase-js";

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
const supabaseUrl = process.env.SUPABASE_URL || "";
const supabaseKey = process.env.SUPABASE_API_KEY || "";
const supabase: any = createClient(supabaseUrl, supabaseKey, opcionesSupabase);

// Ver la tabla de juegos
const verTablas = async () => {
  const { data: juegos, error } = await supabase.from("juegos").select("*");
  if (error) console.log(error);
  return juegos;
};

/*
verTablas()
  .then((v) => console.log(v))
  .catch((e) => console.log(e));
*/

// Incertar un nuevo elemento
const insertarDatos = async () => {
  const value = {
    game: "Hollow Knight",
    created_by: 1,
    image: "https://gamefaqs.gamespot.com/a/box/0/9/2/620092_front.jpg",
    uuid_front_end: "123,123,123",
  };

  const { data, error } = await supabase.from("juegos").insert([value]);
  if (error) console.log(error);
  return data;
};

/*
insertarDatos()
  .then((v) => console.log(v))
  .catch((e) => console.log(e));
*/

// ****************   HTML   **************** \\

const conteiner = document.querySelector("#conteiner");
/*
const a = (game: string, ar: object[]) => {
  for (let i = 0; i < ar.length; i++) {
    conteiner?.appendChild(parrafo);
    parrafo.innerText = game;
  }
};
*/
verTablas()
  .then((v) => {
    v.map((e: any) => {
      const { game, image } = e;
      const parrafo = document.createElement("p");
      const imageHtml = document.createElement("img");

      conteiner?.appendChild(parrafo);
      conteiner?.appendChild(imageHtml);
      parrafo.innerText = game;
      imageHtml.src = image;
    });
  })
  .catch((e) => console.log(e));
