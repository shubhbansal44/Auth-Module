// // types/next-auth.d.ts
// import NextAuth, { DefaultSession } from "next-auth";

// declare module "next-auth" {
//   interface Session {
//     user: {
//       id: string;
//       email: string;
//       name: string;
//       role: string;  // Add your custom properties here
//     } & DefaultSession["user"];
//   }

//   interface User {
//     id: string;
//     email: string;
//     name: string;
//     role: string;  // Add your custom properties here
//   }
// }
