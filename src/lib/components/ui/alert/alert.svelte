<script lang="ts">
    import CircleCheck from '../../../../assets/CircleCheck.svg';
    import TriangleExclamation from '../../../../assets/TriangleExclamation.svg';
    let { message, success = false } = $props();
</script>

<div
    class={`bcds-TextField--alert ${success ? 'bcds-TextField--success' : 'bcds-TextField--warning'}`}
>
    {#if success}
        <img src={CircleCheck} alt="circle-check-icon" />
    {:else}
        <img src={TriangleExclamation} alt="warning-icon" />
    {/if}
    <p>{message}</p>
</div>

<style>
</style>
