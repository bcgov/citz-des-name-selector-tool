<script lang="ts">
    interface ILink {
        label: string;
        link: string;
    }

    let { title, links } = $props();
</script>

<figure class="bcds-footer--links">
    {#if title}
        <figcaption class="bcds-footer--links-title">{title}</figcaption>
    {/if}
    {#if links}
        <ul>
            {#each links as link, index}
                <li id={`${title.toLowerCase().replace(/\s/g,"-")}-${index}`}>
                    <a href=link.link>
                        {link.label}
                    </a>
                </li>
            {/each}    
        </ul>
    {/if}
</figure>

<style>
    .bcds-footer--links {
        margin: var(--layout-margin-none);
        min-width: 320px;
    }

    .bcds-footer--links-title {
        display: block;
        font: var(--typography-bold-small-body);
        margin-bottom: var(--layout-padding-medium);
        text-transform: uppercase;
    }
</style>
