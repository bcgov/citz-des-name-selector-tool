<script lang="ts">
    let {message, success = false} = $props();

    let clasName = success ? "bcds-TextField--success" : "bcds-TextField--warning";
</script>

<p class={clasName}>
    {message}
</p>