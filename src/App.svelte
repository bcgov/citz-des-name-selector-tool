<script lang="ts">
    import './app.css';
    import Header from './lib/components/ui/header/header.svelte';
    import Footer from './lib/components/ui/footer/Footer.svelte';
    import Welcome from '$lib/Welcome.svelte';
    import Background from '$lib/Background.svelte';
    import Considerations from '$lib/Considerations.svelte';
    import FullName from './lib/FullName.svelte';
    import AltName from './lib/AltName.svelte';
    import '@bcgov/design-tokens/css/variables.css';
    import Navigation from '$lib/components/ui/footer/navigation/Navigation.svelte';
    import { step } from '$lib/shared.svelte';
</script>

<main class="flex flex-col items-center justify-center min-h-screen">
    <Header />

    <form class="grow top-0 px-7 pb-15">
        {#if step.value === 0}
            <Welcome />
        {/if}

        {#if step.value === 1}
            <Background />
        {/if}

        {#if step.value === 2}
            <Considerations />
        {/if}

        {#if step.value === 3}
            <FullName />
        {/if}

        {#if step.value === 4}
            <AltName />
        {/if}

        <br />
    </form>

    <Navigation />

    <Footer />
</main>

<style>
</style>
