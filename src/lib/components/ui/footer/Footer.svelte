<script lang="ts">


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
</style>