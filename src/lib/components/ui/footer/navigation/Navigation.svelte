<script lang="ts">
    import { altName, fullName, step } from '$lib/shared.svelte';

    $effect(function () {
        // If we are before the last step, the next button is enabled.
        if (step.value < step.max) {
            const el = document.getElementById('primary-button');
            el?.classList.add('primary');
            el?.classList.remove('disabled');
        }
        // If we're at the last step, the next button is disabled.
        if (step.value === step.max) {
            const el = document.getElementById('primary-button');
            el?.classList.remove('primary');
            el?.classList.add('disabled');
        }
        window.scrollTo(0, 0);
    });

    function previousStep() {
        if (step.value > 0) {
            step.value = step.value - 1;
        }
    }

    function nextStep() {
        if (step.value < step.max) {
            step.value = step.value + 1;
        }

        if (!altName.initialized && step.value === 4) {
            altName.first.name = fullName.first.name;
            altName.middle.name = fullName.middle.name;
            altName.last.name = fullName.last.name;
            altName.initialized = true;
        }
    }
</script>

<div class="bcds-Navigation">
    {#if step.value > 0}
        <button class="bcds-Button secondary medium" onclick={previousStep}>
            Back
        </button>
    {/if}
    <button
        id="primary-button"
        class="bcds-Button primary medium"
        onclick={nextStep}
    >
        Next
    </button>
</div>

<style>
    .bcds-Navigation {
        width: 100%;
        margin-bottom: 20px;
        display: flex;
        justify-content: space-evenly;
    }
</style>
