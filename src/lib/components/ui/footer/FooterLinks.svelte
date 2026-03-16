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

</style>
