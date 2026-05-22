<script lang="ts">
    import Callout from './components/callout/callout.svelte';
</script>

<div class="page-welcome">
    <h1>Welcome</h1>
    <Callout backgroundColor="lightBlue">
        <div class="callout-welcome">
            <div>
                <figure>
                    <img src="/tyrone-elliott-oars.png" alt="" />
                    <figcaption>
                        Artwork by Tuwuxuwul&rsquo;t-hw // Tyrone Elliott
                    </figcaption>
                </figure>
            </div>
            <div>
                <p>
                    The Province is taking steps to include First Nations, Inuit
                    and Métis languages in official government records, systems
                    and services.
                </p>
                <p>
                    Learn more <a
                        href="https://www2.gov.bc.ca/gov/content?id=666A1FD778FA437994E419A98662ED5C"
                        title="Including Indigenous languages in government records, systems and services"
                        >here</a
                    >
                </p>
            </div>
        </div>
    </Callout>

    <p>
        This digital tool assists First Nations, Inuit and Métis people
        who&apos;ve registered a name in an Indigenous language in determining
        an alternate spelling to their name. This alternate spelling will be
        used for systems that can&apos;t yet store Indigenous language
        characters.
    </p>

    <p>Note: No data will be stored in this application.</p>

    <p>When you are ready, let&apos;s get started together!</p>
</div>

<style>
    .page-welcome {
        > * {
            margin: var(--layout-margin-medium) 0;
        }
    }

    .callout-welcome {
        display: flex;
        flex-direction: row;
        gap: var(--layout-padding-large);

        figure {
            figcaption {
                font-size: 14px;
                font-weight: 300;
            }
        }

        p {
            margin: var(--layout-margin-large) 0;
        }
    }
</style>
