<script lang="ts">
    import './app.css';
    import Header from './lib/components/ui/header/header.svelte';
    import Footer from './lib/components/ui/footer/Footer.svelte';
    import FullName from './lib/FullName.svelte';
    import AltName from './lib/AltName.svelte';
    import '@bcgov/design-tokens/css/variables.css';
    import Navigation from '$lib/components/ui/footer/navigation/Navigation.svelte';
    import { step } from '$lib/shared.svelte';
</script>

<main class="flex flex-col items-center justify-center min-h-screen">
    <Header />

    <form class="top-0 px-7 pb-15">

        {#if step.value === 1}
            <FullName />
        {/if}

        {#if step.value === 2}
            <AltName />
        {/if}

        <br />

        <p>
            If you are happy with the name versions you entered above, please
            hit the ‘Next” button to see them together and take a screenshot
        </p>

    </form>

    <Navigation />

    <Footer />
</main>

<style>
</style>
