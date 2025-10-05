import { useState } from "react";

export const useFetch = (baseUrl: string = "") => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const request = async (url: string, options?: RequestInit) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(baseUrl + url, {
        headers: {
          "Content-Type": "application/json",
        },
        ...options,
      });

      if (!res.ok) throw new Error("Lỗi");
      return await res.json();
    } catch (err: any) {
      setError(err.message);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  // Get có trả về kiểu dữ liệu
  // Thêm generic T vào để nó biết trả ra gì
  const get = <T>(url: string) => request(url, { method: "GET" });

  const post = (url: string, body: any) =>
    request(url, { method: "POST", body: JSON.stringify(body) });

  const put = (url: string, body: any) =>
    request(url, { method: "PUT", body: JSON.stringify(body) });

  const del = (url: string) => request(url, { method: "DELETE" });

  return { get, post, put, del, isLoading, error };
};
