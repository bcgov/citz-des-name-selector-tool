<script lang="ts">
    import { onMount } from 'svelte';
    import './app.css';
    import Header from '$lib/components/ui/header/header.svelte';
    import Footer from '$lib/components/ui/footer/Footer.svelte';
    import Welcome from '$lib/pages/Welcome.svelte';
    import Background from '$lib/pages/Background.svelte';
    import Considerations from '$lib/pages/Considerations.svelte';
    import FullName from '$lib/pages/FullName.svelte';
    import AltName from '$lib/pages/AltName.svelte';
    import ViewName from '$lib/pages/ViewName.svelte';
    import ViewNameByIdentification from '$lib/pages/ViewNameByIdentification.svelte';
    import '@bcgov/design-tokens/css/variables.css';
    import Navigation from '$lib/components/ui/footer/navigation/Navigation.svelte';
    import { altName, fullName, step } from '$lib/shared.svelte';
    import { STEP } from '$lib/constants';
    import {
        getInitialStepFromSearch,
        parseNameStateFromSearch,
        serializeNameStateToSearch,
    } from '$lib/url-state';

    let hasHydratedQueryState = $state(false);

    function applyQueryState(search: string) {
        const hydratedState = parseNameStateFromSearch(search);

        fullName.first.name = hydratedState.fullName.first;
        fullName.middle.name = hydratedState.fullName.middle;
        fullName.last.name = hydratedState.fullName.last;

        altName.first.name = hydratedState.altName.first;
        altName.middle.name = hydratedState.altName.middle;
        altName.last.name = hydratedState.altName.last;
        altName.initialized = hydratedState.hasAltNameParams;

        step.value = getInitialStepFromSearch(
            search,
            hydratedState.fullName,
            hydratedState.altName
        );
    }

    onMount(() => {
        applyQueryState(window.location.search);
        hasHydratedQueryState = true;
    });

    $effect(() => {
        if (!hasHydratedQueryState) {
            return;
        }

        const nextSearch = serializeNameStateToSearch(
            {
                first: fullName.first.name,
                middle: fullName.middle.name,
                last: fullName.last.name,
            },
            {
                first: altName.first.name,
                middle: altName.middle.name,
                last: altName.last.name,
            },
            step.value
        );

        if (window.location.search === nextSearch) {
            return;
        }

        const nextUrl = `${window.location.pathname}${nextSearch}${window.location.hash}`;
        window.history.replaceState(window.history.state, '', nextUrl);
    });
</script>

<main class="flex flex-col items-center justify-center min-h-screen">
    <Header />

    <form class="grow top-0 px-7 pb-15">
        {#if step.value === STEP.WELCOME}
            <Welcome />
        {/if}

        {#if step.value === STEP.BACKGROUND}
            <Background />
        {/if}

        {#if step.value === STEP.CONSIDERATIONS}
            <Considerations />
        {/if}

        {#if step.value === STEP.LEGAL_NAME}
            <FullName />
        {/if}

        {#if step.value === STEP.ALTERNATIVE_NAME}
            <AltName />
        {/if}

        {#if step.value === STEP.VIEW_NAMES}
            <ViewName />
        {/if}

        {#if step.value === STEP.VIEW_IDENTIFICATIONS}
            <ViewNameByIdentification />
        {/if}

        <br />
    </form>

    <Navigation />

    <Footer />
</main>

<style>
</style>
