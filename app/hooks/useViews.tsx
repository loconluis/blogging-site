import { useEffect, useState } from "react";
import supabase, { getViews, incrementViews } from "@/lib/views";

const useViews = (slug: string) => {
  const [views, setViews] = useState<number>(0);

  useEffect(() => {
    const fetchViews = async () => {
      const initialViews = await getViews(slug);
      setViews(initialViews);
      await incrementViews(slug, initialViews);
    };

    fetchViews();

    const channel = supabase
      .channel(`views_${slug}`)
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "views",
          filter: `slug=eq.${slug}`,
        },
        (payload) => {
          setViews(payload.new.views);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [slug, supabase]);

  return views;
};

export default useViews;
