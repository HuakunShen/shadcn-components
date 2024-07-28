<script setup lang="ts">
import { Alert } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { $themeConfig, setLightMode, setRadius, setThemeColor, ThemeConfig } from "@/stores/config"
import { useStore } from "@nanostores/vue"
import { onMount } from "nanostores"
import { onMounted, reactive, ref } from "vue"
import ThemeCustomizer from "./components/theme/ThemeCustomizer.vue"
import { Theme } from "./lib/themes/themes"

const themeConfigStore = useStore($themeConfig)
const themeConfig = reactive<ThemeConfig>({
	theme: "neutral",
	radius: 0.5,
	lightMode: "auto"
})
onMounted(() => {
	themeConfig.lightMode = themeConfigStore.value.lightMode
	themeConfig.theme = themeConfigStore.value.theme
	themeConfig.radius = themeConfigStore.value.radius
})
</script>

<template>
	<Button>Hello</Button>
	<Alert>Alert</Alert>
	<pre>{{ themeConfig }}</pre>
	<ThemeCustomizer
		v-model:lightMode="themeConfig.lightMode"
		v-model:theme="themeConfig.theme"
		v-model:radius="themeConfig.radius"
	/>
</template>
