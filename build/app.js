var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const supabaseUrl = "https://cdtwjqgeufxrjxdtqqqz.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkdHdqcWdldWZ4cmp4ZHRxcXF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY1NzM3MzYsImV4cCI6MjAwMjE0OTczNn0.RpDOs0xuE7bwmP1fRcJjJ-wiEptL5-YoCBqZZokEQss";
const supabase = createClient(supabaseUrl, supabaseKey, opcionesSupabase);
// Fuente: https://supabase.com/dashboard/project/cdtwjqgeufxrjxdtqqqz/api?resource=juegos
// Ver la tabla de juegos
const verTablas = () => __awaiter(void 0, void 0, void 0, function* () {
    const { data: juegos, error } = yield supabase.from("juegos").select("*");
    if (error)
        console.log(error);
    return juegos;
});
/*
verTablas()
  .then((v) => console.log(v))
  .catch((e) => console.log(e));
*/
// Incertar un nuevo elemento
const insertarDatos = () => __awaiter(void 0, void 0, void 0, function* () {
    const value = {
        game: "Hollow Knight",
        created_by: 1,
        image: "https://gamefaqs.gamespot.com/a/box/0/9/2/620092_front.jpg",
        uuid_front_end: "123,123,123",
    };
    const { data, error } = yield supabase.from("juegos").insert([value]);
    if (error)
        console.log(error);
    return data;
});
/*
insertarDatos()
  .then((v) => console.log(v))
  .catch((e) => console.log(e));
*/
// ****************   HTML   **************** \\
/*
const conteiner = document.querySelector("#conteiner");
const parrafo = document.createElement("p");
const image = document.createElement("img");

conteiner?.appendChild(parrafo);
conteiner?.appendChild(image);
*/
verTablas()
    .then((v) => {
    v.map((e) => {
        const { game, image } = e;
        console.log(image);
        // parrafo.innerText = game;
        // image.src = image;
    });
})
    .catch((e) => console.log(e));
