"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type * as React from "react";

import { getQueryClient } from "./get-query-client";

/**
 * @see https://tanstack.com/query/latest/docs/framework/react/examples/nextjs-app-prefetching
 */
export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* By default, React Query Devtools are only included in bundles when process.env.NODE_ENV === 'development', so you don't need to worry about excluding them during a production build. */}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
