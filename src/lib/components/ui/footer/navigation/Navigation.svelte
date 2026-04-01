<script lang="ts">
    import { step } from '$lib/shared.svelte';

    $effect(function () {
        if (step.value < 2) {
            const el = document.getElementById('primary-button');
            el?.classList.add('primary');
            el?.classList.remove('disabled');
        }
        if (step.value === 2) {
            const el = document.getElementById('primary-button');
            el?.classList.remove('primary');
            el?.classList.add('disabled');
        }
    });

    function previousStep() {
        if (step.value > 1) {
            step.value = step.value - 1;
        }
    }

    function nextStep() {
        if (step.value < 2) {
            step.value = step.value + 1;
        }
    }

</script>

<div style="width: 100%; margin-bottom: 20px; display: flex; justify-content: space-evenly;">
    {#if step.value > 1}
        <button
            class="bcds-Button secondary medium"
            onclick={previousStep}>
            Back
        </button>
    {/if}
    <button
        id="primary-button"
        class="bcds-Button primary medium"
        onclick={nextStep}>
        Next
    </button>
</div>