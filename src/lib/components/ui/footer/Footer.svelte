<script lang="ts">
    import FooterLinks from "./FooterLinks.svelte";


    const defaultCopyright = `© ${new Date().getUTCFullYear()} Government of British Columbia.`;
</script>

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

    <div class="bcds-footer--container">
        <div class="bcds-footer--container-content">

            <FooterLinks
                title="More Info"
                links={[
                    {label: "Home", link: "https://www2.gov.bc.ca/gov/content/home"},
                    {label: "About gov.bc.ca",link: "https://www2.gov.bc.ca/gov/content?id=3C4F47288DFB454987435AB5EFEFBB7F"},
                    {label: "Disclaimer",link: "https://www2.gov.bc.ca/gov/content?id=79F93E018712422FBC8E674A67A70535"},
                    {label: "Privacy",link: "https://www2.gov.bc.ca/gov/content?id=9E890E16955E4FF4BF3B0E07B4722932"},
                    {label: "Accessibility",link: "https://www2.gov.bc.ca/gov/content?id=E08E79740F9C41B9B0C484685CC5E412"},
                    {label: "Copyright",link: "https://www2.gov.bc.ca/gov/content?id=1AAACC9C65754E4D89A118B875E0FBDA"},
                    {label: "Contact us",link: "https://www2.gov.bc.ca/gov/content?id=6A77C17D0CCB48F897F8598CCC019111"}
                ]} />
            
            <hr>

            <p class="bcds-footer--copyright">
                {defaultCopyright}
            </p>
        </div>
    </div>

</footer>

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

    .bcds-footer--container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        background-color: var(--surface-color-background-light-gray);
        padding: var(--layout-padding-xlarge);
    }

    .bcds-footer--container-content {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: var(--layout-padding-xlarge);
        max-width: 1100px;
        width: 100%;
    }

    .bcds-footer--copyright {
        color: var(--typography-color-secondary);
        font: var(--typography-regular-body);
        margin: var(--layout-margin-none);
    }

    .bcds-footer hr {
        background-color: var(--surface-color-border-dark);
        border: var(--layout-border-width-none);
        height: var(--layout-border-width-small);
        margin: var(--layout-margin-none);
        width: 100%;
    }
</style>
