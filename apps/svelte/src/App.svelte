<script>
  import "./app.css";
  import {
    Button,
    ModeToggle,
    ModeDropdown,
    CmdkDemo,
  } from "@shadcn-components/svelte";
  import { ModeWatcher } from "mode-watcher";
</script>

<ModeWatcher />
<Button>hihihihi</Button>
<ModeToggle />
<ModeDropdown />
<CmdkDemo class="w-[45em] h-[30em]" />
