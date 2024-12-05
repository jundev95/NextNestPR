// src/common/utils/api.ts
const BASE_URL = 'http://localhost:5000';

interface ApiOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  body?: unknown;
  headers?: Record<string, string>;
  revalidate?: number;
}

interface ApiResponse<T> {
  data: T;
  status: number;
}

export async function api<T>(
  endpoint: string,
  { method = 'GET', body, headers = {}, revalidate }: ApiOptions = {},
): Promise<ApiResponse<T>> {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
      next: revalidate !== undefined ? { revalidate } : undefined,
    });

    if (!res.ok) {
      throw new Error(`Error: ${res.status} ${res.statusText}`);
    }

    const data = (await res.json()) as T;
    return { data, status: res.status };
  } catch (error: any) {
    console.error('API Error:', error.message);
    throw error;
  }
}
