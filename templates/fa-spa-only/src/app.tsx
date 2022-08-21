import { MantineProvider } from "@mantine/core";
import { Provider } from "jotai";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";

const queryClient = new QueryClient();

function App() {
  return (
    <Provider>
      <QueryClientProvider client={queryClient}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme: "dark",
          }}
        >
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </MantineProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
