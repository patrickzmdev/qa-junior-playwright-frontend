import dotenv from "dotenv";
import { IUser } from "./interfaces/User";
dotenv.config();

const getEnvOrThrow = (key: string): string => {
  const value = process.env[key];
  if (!value) {
    throw new Error(
      `Variável de ambiente ${key} não configurada. Configure o arquivo .env`
    );
  }
  return value;
};

export const users = {
  standardUser: {
    username: getEnvOrThrow("STANDARD_USER"),
    password: getEnvOrThrow("STANDARD_PASS"),
  } as IUser,

  invalidUser: {
    username: getEnvOrThrow("INVALID_USER"),
    password: getEnvOrThrow("INVALID_PASS"),
  } as IUser,
};
