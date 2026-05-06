<script>
    import { AltNameToString, fullNameToString } from "./shared.svelte";

</script>
<div class="page-view-name">
    <h1>
        Step 3: View your Whole Legal Full Name and the Alternate Spelling
        together
    </h1>

    <p class="note">
        <strong>Note:</strong> Feel free to screenshot this page to share with your
        community language teachers, family and to discuss next steps with the Vital
        Statistics Name Support Team
    </p>

    <h2>Full legal name you entered</h2>
    <p>
        &lpar;if you need to adjust anything, hit the &lsquo;Back&rsquo; button
        below&rpar;
    </p>
    <p class="name-display">
        {fullNameToString()}
    </p>

    <h2>Alternate Spelling you entered</h2>
    <p>
        &lpar;if you need to adjust anything, hit the &lsquo;Back&rsquo; button
        below&rpar;
    </p>
    <p class="name-display">
        {AltNameToString()}
    </p>
</div>

<style>
    .page-view-name {
        > * {
            margin: var(--layout-margin-large) 0;
        }

        h2 {
            margin-bottom: 0;

            + p {
                margin-top: 0;
            }
        }

        p.note {
            margin-bottom: 3rem;
        }

        p.name-display {
            font-size: 1.5rem;
            font-weight: 700;
            line-height: 1.6875rem;
            margin: var(--layout-margin-xlarge) 0;
        }
    }
</style>
