"use client";

import { useState } from "react";

type AdminType = {
  id: string;
  role: string;
  email: string;
  status: string;
};
export const adminAuth = () => {
  const [admin, setAdmin] = useState<AdminType | null>(null);

  return { admin };
};
