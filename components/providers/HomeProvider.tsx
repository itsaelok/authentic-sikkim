"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { getLatestNews, getFeaturedNews, getTrendingNews, News } from "@/services/news";

type HomeContextType = {
  latest: News[];
  featured: News[];
  trending: News[];
  loading: boolean;
};

const HomeContext = createContext<HomeContextType>({
  latest: [],
  featured: [],
  trending: [],
  loading: true,
});

export function HomeProvider({ children }: { children: ReactNode }) {
  const [latest, setLatest] = useState<News[]>([]);
  const [featured, setFeatured] = useState<News[]>([]);
  const [trending, setTrending] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    Promise.all([getLatestNews(), getFeaturedNews(), getTrendingNews()])
      .then(([latestNews, featuredNews, trendingNews]) => {
        if (!active) return;
        setLatest(latestNews);
        setFeatured(featuredNews);
        setTrending(trendingNews);
      })
      .finally(() => active && setLoading(false));

    return () => {
      active = false;
    };
  }, []);

  return (
    <HomeContext.Provider value={{ latest, featured, trending, loading }}>
      {children}
    </HomeContext.Provider>
  );
}

export function useHomeData() {
  return useContext(HomeContext);
}
