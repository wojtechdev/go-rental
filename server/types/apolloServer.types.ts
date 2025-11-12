export interface CorsOriginCallback {
  (err: Error | null, allow?: boolean): void;
}

export interface LocalCorsOptions {
  credentials: boolean;
  origin: (origin: string | undefined, callback: CorsOriginCallback) => void;
}
