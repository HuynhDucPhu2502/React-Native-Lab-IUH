import { useState } from "react";

export const useFetch = (baseUrl: string) => {
  const [isLoading, setIsLoading] = useState(false);

  const request = async <T>(
    url: string,
    options: RequestInit
  ): Promise<T[]> => {
    setIsLoading(true);

    const res = await fetch(url, {
      headers: { "Content-Type": "application/json" },
      ...options,
    });

    setIsLoading(false);
    if (!res.ok) return [];
    return res.json();
  };

  const get = <T>(url: string) => request<T>(baseUrl + url, { method: "GET" });
  const post = (url: string, data: any) =>
    request(baseUrl + url, { method: "POST", body: JSON.stringify(data) });
  const put = (url: string, data: any) =>
    request(baseUrl + url, { method: "PUT", body: JSON.stringify(data) });
  const del = (url: string) => request(baseUrl + url, { method: "DELETE" });

  return { isLoading, get, post, put, del };
};
