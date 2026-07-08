const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';

export const fetchPageData = async () => {
  const res = await fetch(`${API_BASE_URL}/api/page-data/`);
  if (!res.ok) throw new Error('Network response error');
  return res.json();
};

export const subscribeNewsletter = async (email) => {
  const res = await fetch(`${API_BASE_URL}/api/subscribe/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email })
  });
  return { ok: res.ok, status: res.status, data: await res.json() };
};

export const applyInternship = async (formData) => {
  const res = await fetch(`${API_BASE_URL}/api/apply/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  return { ok: res.ok, status: res.status, data: await res.json() };
};
