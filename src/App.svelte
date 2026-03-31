<script lang="ts">
    import './app.css';
    import Header from './lib/components/ui/header/header.svelte';
    import Footer from './lib/components/ui/footer/Footer.svelte';
    import FullName from './lib/FullName.svelte';
    import AltName from './lib/AltName.svelte';
    import '@bcgov/design-tokens/css/variables.css';

    import { step } from '$lib/shared.svelte';
    import { Ellipsis } from '@lucide/svelte';

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

<main class="flex flex-col items-center justify-center min-h-screen">
    <Header />

    <form class="top-0 px-7 pb-15">
        <!-- <form class="bg-blue-50 mt-15 absolute top-0 px-7 pb-15"> -->

        <FullName />

        <br />

        <AltName />

        <br />

        <p>
            If you are happy with the name versions you entered above, please
            hit the ‘Next” button to see them together and take a screenshot
        </p>

        <br />
    </form>

    <!-- Button Container for Back, Next and Done button -->
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

    <Footer />
</main>

<style>
    .bcds-Button {
        border: none;
        border-radius: var(--layout-border-radius-medium);
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: var(--layout-padding-small);
        font: var(--typography-regular-body);
    }

    .bcds-Button.primary {
        background: var(--surface-color-primary-button-default);
        color: var(--icons-color-primary-invert);
    }

    .bcds-Button.secondary {
        background-color: var(--surface-color-secondary-button-default);
        border: 1px solid var(--surface-color-border-dark);
        color: var(--typography-color-primary);
    }

    .bcds-Button.disabled {
        background-color: var(--surface-color-primary-danger-button-disabled);
        color: var(--typography-color-disabled);
    }

    .bcds-Button.medium {
        min-height: 40px;
        padding: var(--layout-padding-none) var(--layout-padding-medium);
    }
</style>
