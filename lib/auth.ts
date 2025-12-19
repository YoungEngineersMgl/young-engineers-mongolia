import jwt from "jsonwebtoken";

export function getAuthUser(req: Request) {
  const authHeader = req.headers.get("authorization");

  if (!authHeader) {
    throw new Error("No authorization header");
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    throw new Error("Invalid token");
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
    id: string;
    role: string;
    status: string;
  };

  return decoded;
}
