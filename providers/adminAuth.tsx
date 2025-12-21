"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

type AdminType = {
  id: string;
  role: string;
  email: string;
  status: string;
};

export const useAdminAuth = () => {
  const [admin, setAdmin] = useState<AdminType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const { push } = useRouter();
  useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (localToken) {
      setToken(localToken);
    }
  }, []);

  useEffect(() => {
    if (!token) {
      return;
    }

    const fetchAdmin = async () => {
      try {
        if (!token) return;
        const response = await fetch("/api/authAdmin", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch admin");
        }

        const res = await response.json();
        setAdmin(res);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchAdmin();
  }, [token]);

  const login = async (email: string, password: string) => {
    const response = await fetch("/api/log-in", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },

      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (response.ok) {
      const localToken = await response.json();
      localStorage.setItem("token", localToken);
      setToken(localToken);
      push("/dashboard");
      toast.success("Logged in successfully!");
    } else {
      toast.error("Login failed.");
    }
  };

  return { admin, loading, error, login, token, setToken, setAdmin };
};
