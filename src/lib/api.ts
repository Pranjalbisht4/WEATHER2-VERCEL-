export const API_BASE = "https://weather-backend-8r87.onrender.com/";

export async function apiGet<T = any>(path: string) {
  const res = await fetch(`${API_BASE}${path}`);
  return res.json() as Promise<T>;
}

export async function apiPost<T = any>(path: string, body: any) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  return res.json() as Promise<T>;
}
