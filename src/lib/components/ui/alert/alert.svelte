<script lang="ts">
    import CircleCheck from '../../../../assets/CircleCheck.svelte';
    import TriangleExclamation from '../../../../assets/TriangleExclamation.svelte';
    let { message, success = false } = $props();
</script>

<div
    class={`bcds-TextField--alert ${success ? 'bcds-TextField--success' : 'bcds-TextField--warning'}`}
>
    {#if success}
        <CircleCheck height="20px" width="20px" fill="currentColor" />
    {:else}
        <TriangleExclamation height="20px" width="20px" fill="currentColor" />
    {/if}
    <p>{message}</p>
</div>

<style>
</style>
