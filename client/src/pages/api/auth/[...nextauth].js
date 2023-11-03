import NextAuth from "next-auth"
import {GithubProvider, GoogleProvider } from "next-auth/providers/github"

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
      GithubProvider({
        clientId: Iv1.c9165120164f8ce4,
        clientSecret: '39640acc9b686fa0d8093f40989dabee3b95dfbe',
      }),
      GoogleProvider({
        clientId: ,
        clientSecret: ,
      })
    ],
  }
  export default NextAuth(authOptions)