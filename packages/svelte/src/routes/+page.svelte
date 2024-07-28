<script lang="ts">
	import CommandDemo from "@/components/cmdk/demo.svelte"
	import { ThemeCustomizer, ThemeWrapper } from "@/components/theme"
	import { Button } from "@/components/ui/button"
</script>

<ThemeWrapper>
	<div class="p-4 flex flex-col gap-2">
		<div>
			<ThemeCustomizer />
			<Button>Hello</Button>
		</div>
		<CommandDemo class="w-[45em] h-[30em]" />
	</div>
</ThemeWrapper>
