import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export const getViews = async (slug: string): Promise<number> => {
  const {
    data: { user },
    error: signInError,
  } = await supabase.auth.signInAnonymously();

  if (user) {
    const { data: _data, error } = await supabase
      .from("viewcount")
      .select("views")
      .eq("slug", slug)
      .single();
    console.log("> _data", _data);

    if (error) {
      // Si no existe, creamos una nueva entrada
      const { data: newData, error: insertError } = await supabase
        .from("viewcount")
        .insert({ slug, views: 0 })
        .select("views")
        .single();

      if (insertError) {
        console.error("Error al crear nueva entrada:", insertError);
        return 0;
      }

      return newData?.views || 0;
    }

    return _data?.views || 0;
  } else {
    console.error("Error al iniciar sesión:", signInError);
    return 0;
  }
};

export const incrementViews = async (
  slug: string,
  currentViews: number
): Promise<void> => {
  const { error } = await supabase
    .from("viewcount")
    .update({ views: currentViews + 1 })
    .eq("slug", slug);
  if (error) console.error("Error al incrementar vistas:", error);
};

export default supabase;
