<script lang="ts">
    import CircleCheck from '../../../../assets/CircleCheck.svelte';
    import TriangleExclamation from '../../../../assets/TriangleExclamation.svelte';
    let { message, success = false } = $props();
</script>

<div
    class={`bcds-TextField--alert ${success ? 'bcds-TextField--success' : 'bcds-TextField--warning'}`}
>
    {#if success}
        <CircleCheck
            alt="circle-check-icon"
            height="20px"
            width="20px"
            fill="var(--support-surface-color-info)"
        />
    {:else}
        <TriangleExclamation
            alt="warning-icon"
            height="20px"
            width="20px"
            fill="var(--typography-color-primary)"
        />
    {/if}
    <p>{message}</p>
</div>

<style>
</style>
