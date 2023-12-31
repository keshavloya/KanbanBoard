import Dashboard from "./screens/Dashboard";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Dashboard />
    </ChakraProvider>
  );
}

export default App;
