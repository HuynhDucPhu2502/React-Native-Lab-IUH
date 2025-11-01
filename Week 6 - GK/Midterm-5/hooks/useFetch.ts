import { useState } from "react";

export const useFetch = (baseUrl: string) => {
  const [isLoading, setIsLoading] = useState(false);

  const request = async <T>(
    url: string,
    options: RequestInit
  ): Promise<T[]> => {
    setIsLoading(true);

    const res = await fetch(baseUrl + url, {
      headers: { "Content-Type": "application/json" },
      ...options,
    });

    setIsLoading(false);
    if (!res.ok) return [];
    return res.json();
  };

  const get = async <T>(url: string) => request<T>(url, { method: "GET" });
  const post = async (url: string, data: any) =>
    request(url, { method: "POST", body: JSON.stringify(data) });
  const del = async (url: string) => request(url, { method: "DELETE" });

  return { isLoading, get, post, del };
};
