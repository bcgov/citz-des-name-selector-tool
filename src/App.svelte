<script lang="ts">
    import './app.css';
    import Navbar from './lib/components/ui/navbar/Navbar.svelte';
    import Footer from './lib/components/ui/footer/Footer.svelte';
    import FullName from './lib/FullName.svelte';
    import AltName from './lib/AltName.svelte';
    import "@bcgov/design-tokens/css/variables.css";
</script>

<main class="flex flex-col items-center justify-center min-h-screen">
    <!--<Navbar />-->
    <header class="bcds-header">
        <div class="bcds-header--container">
            <a>Logo</a>
            <div class="bcds-header--line"></div>
            <div class="bcds-header--title">
                Step
            </div>
        </div>
    </header>

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

    <Footer />
</main>

<style>
    .bcds-header {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        background-color: var(--surface-color-forms-default);
        border-bottom-color: var(--surface-color-border-default);
        border-bottom-style: solid;
        border-bottom-width: var(--layout-border-width-small);
        min-height: 65px;
        padding: var(--layout-padding-none) var(--layout-padding-medium);
        width: 100%;
    }

    .bcds-header--container {
        flex-grow: 1;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: var(--layout-padding-medium);
        max-width: 1100px;
    }

    .bcds-header--line {
        background-color: var(--surface-color-border-default);
        width: 1px;
        height: 32px;
    }

    .bcds-header--title {
        flex-grow: 1;
        font: var(--typography-bold-h4);
        color: var(--typography-color-primary);
    }
</style>
