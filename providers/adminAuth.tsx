"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { jwtDecode } from "jwt-decode";
import { usePathname } from "next/navigation";

type AdminType = {
  id: string;
  role: string;
  email: string;
  status: string;
};

type DecodedType = {
  data: AdminType;
};
export const useAdminAuth = () => {
  const [admin, setAdmin] = useState<AdminType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const pathname = usePathname();

  const { push } = useRouter();

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (localToken) {
      setToken(localToken);
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const isPublicRoute =
      pathname.startsWith("/activate") || pathname === "/login";

    if (!loading && !token && !isPublicRoute) {
      push("/login");
    }
  }, [token, loading, pathname, push]);

  useEffect(() => {
    if (!token) return;
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
          throw new Error("Invalid token");
        }

        const res = await response.json();
        setAdmin(res);
      } catch (err) {
        localStorage.removeItem("token");
        setToken(null);
        setAdmin(null);
        push("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchAdmin();
  }, [token, push]);

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
