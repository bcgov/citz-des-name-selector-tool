<script lang="ts">
    import './app.css';
    import Header from './lib/components/ui/header/header.svelte';
    import Footer from './lib/components/ui/footer/Footer.svelte';
    import FullName from './lib/FullName.svelte';
    import AltName from './lib/AltName.svelte';
    import "@bcgov/design-tokens/css/variables.css";

    const defaultCopyright = `© ${new Date().getUTCFullYear()} Government of British Columbia.`;
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
    <div>

    </div>

    <!-- <Footer /> -->
    <footer class="bcds-footer">
        <div class="bcds-footer--acknowledgement">
            <div class="bcds-footer--acknowledgement-text">
                <p>
            The B.C. Public Service acknowledges the territories of First Nations
            around B.C. and is grateful to carry out our work on these lands. We
            acknowledge the rights, interests, priorities, and concerns of all
            Indigenous Peoples — First Nations, Métis, and Inuit — respecting and
            acknowledging their distinct cultures, histories, rights, laws, and
            governments.
                </p>
            </div>
        </div>
    </footer>

</main>

<style>
    .bcds-footer {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        width: 100%;
    }

    .bcds-footer--acknowledgement {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        border-top: var(--layout-border-width-large) solid var(--theme-gold-60);
        border-bottom: var(--layout-border-width-large) solid var(--theme-gold-60);
        background-color: var(--theme-gray-110);
        padding: var(--layout-padding-xlarge);
    }

    .bcds-footer--acknowledgement-text {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: stretch;
        color: var(--typography-color-primary-invert);
        font: var(--typography-regular-small-body);
        max-width: 1100px;
        width: 100%;
    }
</style>
