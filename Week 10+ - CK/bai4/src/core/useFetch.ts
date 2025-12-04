import { useState } from "react";

export const useFetch = (baseUrl: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const request = async <T>(
    url: string,
    options?: RequestInit
  ): Promise<T | null> => {
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch(baseUrl + url, {
        headers: { "Content-Type": "application/json" },
        ...options,
      });

      if (!res.ok) throw new Error("Lỗi dồi");

      return await res.json();
    } catch (e) {
      setError((e as Error).message);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const GET = <T>(url: string) => request<T>(url, { method: "GET" });
  const POST = (url: string, data: any) =>
    request(url, { method: "POST", body: JSON.stringify(data) });
  const PUT = (url: string, data: any) =>
    request(url, { method: "PUT", body: JSON.stringify(data) });
  const DEL = (url: string) => request(url, { method: "DELETE" });

  return { isLoading, error, GET, POST, PUT, DEL };
};
