<script lang="ts">
    import CircleCheck from '../../../../../public/CircleCheck.svg';
    import TriangleExclamation from '../../../../../public/TriangleExclamation.svg';
    let {message, success = false} = $props();

    let className = success ? "bcds-TextField--success" : "bcds-TextField--warning";
</script>

<div class={`bcds-TextField--alert ${className}`}>
    {#if success}
        <img src={CircleCheck} alt="circle-check-icon" />
    {:else}
        <img src={TriangleExclamation} alt="warning-icon" />
    {/if}
    <p>{message}</p>
</div>

<style>
</style>