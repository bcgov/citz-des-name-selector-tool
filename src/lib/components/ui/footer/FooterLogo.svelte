<script lang="ts">
</script>

<div class="bcds-footer--logo">
    <img src="./src/assets/SvgBcLogo.svg" alt="bcgov-logo-footer" />

    <p>
        We can help in over 220 languages and through other accessible options.{' '}
        <a
            href="https://www2.gov.bc.ca/gov/content?id=6A77C17D0CCB48F897F8598CCC019111"
        >
            Call, email or text us
        </a>
        , or{' '}
        <a
            href="https://www2.gov.bc.ca/gov/content?id=FBC4210F6BC047A5884198F543C97D53"
        >
            find a service centre
        </a>
    </p>
</div>

<style>
    .bcds-footer--logo {
        display: flex;
        flex-direction: column;
        min-width: 324px;
        width: 576px;

        max-width: 324px;
        gap: var(--layout-padding-medium);
    }

    .bcds-footer--logo img {
        width: 146px;
        min-width: 146px;
    }

    .bcds-footer--logo p {
        font: var(--typography-regular-small-body);
        margin: var(--layout-margin-none);
    }
    .bcds-footer--logo p a {
        color: var(--typography-color-secondary);
        font: var(--typography-regular-small-body);
        text-decoration: underline;
    }
</style>
