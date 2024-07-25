import {
  Button,
  ThemeProvider,
  ThemeCustomizer,
  ThemeWrapper,
  TooltipProvider,
} from "@shadcn-components/react";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ThemeWrapper className="relative flex flex-col items-start md:flex-row md:items-center">
        <TooltipProvider>
          <ThemeCustomizer />
        </TooltipProvider>
      </ThemeWrapper>
      <ThemeWrapper>
        <Button>Hello</Button>
      </ThemeWrapper>
    </ThemeProvider>
  );
}

export default App;
