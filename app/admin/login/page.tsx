"use client";

import { useState, useEffect, ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Page = () => {
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });

  const [token, setToken] = useState("");

  const { push } = useRouter();
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const fetchLogin = async () => {
    const response = await fetch("/api/log-in", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },

      body: JSON.stringify({
        email: inputValues.email,
        password: inputValues.password,
      }),
    });

    if (response.ok) {
      const res = await response.json();
      setToken(res);

      push("/");
    }
  };

  console.log(token);
  return (
    <div>
      <div>
        <Input
          placeholder="email..."
          value={inputValues.email}
          name="email"
          onChange={(e) => handleInput(e)}
        />
        <Input
          placeholder="password..."
          value={inputValues.password}
          name="password"
          onChange={(e) => handleInput(e)}
        />
        <Button onClick={fetchLogin}>add</Button>
      </div>
    </div>
  );
};

export default Page;
