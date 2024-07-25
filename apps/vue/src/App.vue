<script setup lang="ts">
import {
  Button,
  Alert,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Test
} from "@shadcn-components/vue";
import { CaretSortIcon } from "@radix-icons/vue";
import { ref } from "vue";

const isOpen = ref(false);
</script>

<template>
  <Test :msg="1"></Test>
  <Button>Hello</Button>
  <Button variant="destructive"> Destructive </Button>
  <Alert>Hello</Alert>

  <HoverCard>
    <HoverCardTrigger>Hover</HoverCardTrigger>
    <HoverCardContent>
      The Vue Framework – created and maintained by @vuejs.
    </HoverCardContent>
  </HoverCard>

  <Collapsible v-model:open="isOpen" class="w-[350px] space-y-2">
    <div class="flex items-center justify-between space-x-4 px-4">
      <h4 class="text-sm font-semibold">@peduarte starred 3 repositories</h4>
      <CollapsibleTrigger as-child>
        <Button variant="ghost" size="sm" class="w-9 p-0">
          <CaretSortIcon class="h-4 w-4" />
          <span class="sr-only">Toggle</span>
        </Button>
      </CollapsibleTrigger>
    </div>
    <div class="rounded-md border px-4 py-3 font-mono text-sm">
      @radix-ui/primitives
    </div>
    <CollapsibleContent class="space-y-2">
      <div class="rounded-md border px-4 py-3 font-mono text-sm">
        @radix-ui/colors
      </div>
      <div class="rounded-md border px-4 py-3 font-mono text-sm">
        @stitches/react
      </div>
    </CollapsibleContent>
  </Collapsible>
  <h1 className="text-3xl font-bold underline">Hello world!</h1>
</template>
