<script lang="ts">
    import Button from '../button/button.svelte';
    import { step } from '../../../shared.svelte.ts';

    function nextStep() {
        if (step.value === 1) step.value = 2;
        else step.value = 1;
    }
</script>

<Button class="self-center" onclick={nextStep}>
    {#if step.value === 1}
        Next
    {:else}
        Back
    {/if}
</Button>
