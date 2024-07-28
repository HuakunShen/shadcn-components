import { allColors, Theme } from "@/lib/themes/themes"
import { persistentAtom, persistentMap } from "@nanostores/persistent"
import { useColorMode } from "@vueuse/core"
import { map } from "nanostores"

type Config = {
	theme: Theme["name"]
	radius: number
	lightMode: "auto" | "light" | "dark"
}
export const $themeConfig = persistentAtom<Config>(
	"kk-theme:",
	{
		theme: "neutral",
		radius: 0.5,
		lightMode: "auto"
	},
	{
		encode: JSON.stringify,
		decode: JSON.parse
	}
)
export function setThemeColor(color: Theme["name"]) {
	$themeConfig.set({ ...$themeConfig.get(), theme: color })
}

export function setRadius(radius: number) {
	$themeConfig.set({ ...$themeConfig.get(), radius })
}

export function setLightMode(mode: Config["lightMode"]) {
	$themeConfig.set({ ...$themeConfig.get(), lightMode: mode })
}

$themeConfig.subscribe((config) => {
	document.documentElement.style.setProperty("--radius", `${config.radius}rem`)
	document.documentElement.classList.remove(...allColors.map((color) => `theme-${color}`))
	document.documentElement.classList.add(`theme-${config.theme}`)
	const colorMode = useColorMode()
	colorMode.value = config.lightMode ?? "auto"
})
