import { ThemeProvider } from "@ui/components/theme"
import { ThemeCustomizer } from "@ui/components/theme/theme-customizer"
import { Button } from "@ui/components/ui/button"
import { TooltipProvider } from "@ui/components/ui/tooltip"
import "@ui/registry/themes.css"
import { ThemeWrapper } from "@ui/components/theme/theme-wrapper"

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
  )
}

export default App
