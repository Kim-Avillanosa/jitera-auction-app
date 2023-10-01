declare global {
  namespace Models {
    interface User {
      id: number;
      userName: string;
    }

    interface JwtResponse {
      access_token;
    }

    interface TokenData {
      sub: number;
      username: string;
      iat: number;
      exp: number;
    }
  }
}

export {};