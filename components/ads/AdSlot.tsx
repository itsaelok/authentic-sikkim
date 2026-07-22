"use client";

import { useEffect, useState } from "react";

import Advertisement from "./Advertisement";

import {
  Advertisement as Ad,
  getAds,
} from "@/services/ads";

interface Props {
  location:
    | "home-top"
    | "home-middle"
    | "sidebar"
    | "article-top"
    | "article-bottom";
}

export default function AdSlot({
  location,
}: Props) {
  const [ads, setAds] = useState<Ad[]>([]);

  useEffect(() => {
    getAds().then((items) => {
      setAds(
        items.filter(
          (ad) =>
            ad.active &&
            ad.location === location
        )
      );
    });
  }, [location]);

  if (!ads.length) return null;

  const ad = ads[0];

  return (
    <Advertisement
      title={ad.title}
      image={ad.image}
      url={ad.url}
    />
  );
}