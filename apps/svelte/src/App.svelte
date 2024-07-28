<script>
	import "./app.css"
	import {
		Button,
		CmdkDemo,
		ModeDropdown,
		ModeToggle,
		ThemeCustomizer,
		ThemeWrapper
	} from "@shadcn-components/svelte"
	// import "@shadcn-components/svelte/themes"
	import { ModeWatcher } from "mode-watcher"
</script>

<ModeWatcher />
<ThemeWrapper>
	<ThemeCustomizer />
	<Button>Hello</Button>
	<ModeToggle />
	<CmdkDemo class="h-[30em] w-[45em]" />
</ThemeWrapper>
