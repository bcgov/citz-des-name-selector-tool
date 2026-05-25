<script>
    import Callout from './components/callout/callout.svelte';
    import { AltNameToString, errors, fullName, fullNameToString } from './shared.svelte';
    import TriangleExclamation from '../assets/TriangleExclamation.svelte';
    import { checkErrorForMaxLength } from './utils';
    import { rules } from './rules-configuration';

    const isTruncationWarningShown = false;

    checkErrorForMaxLength(fullName.first.name, rules.truncationRules.first.length[0].maximum);
    checkErrorForMaxLength(fullName.last.name, rules.truncationRules.last.length[0].maximum);
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

    {#if errors.hasErrors()}
        <Callout backgroundColor="lightGold">
            <div class="callout-truncations">
                <div class="flex row">
                    <TriangleExclamation height="20px" width="20px" />
                    <p>
                        Your legal name may not be printed as above on certain
                        ID cards due to space limitations
                    </p>
                </div>
                <p>
                    <em>
                        Review the messages below to understand how your legal
                        name may be printed:
                    </em>
                </p>

                <!-- TODO: List of truncations goes here. -->
                <ul>
                    {#if errors.hasError(301)}
                        <li>{errors.getMessage(rules.truncationRules.first.length[0].maximum.id)}</li>
                    {/if}
                    {#if errors.hasError(321)}
                        <li>{errors.getMessage(rules.truncationRules.last.length[0].maximum.id)}</li>
                    {/if}
                </ul>

                <p>
                    <strong>Questions or need help?</strong> Click the button below
                    to contact the Name Support Team to discuss options and/or next
                    steps.
                </p>

                <button class="bcds-Button primary medium">
                    Contact the Name Support Team
                </button>
            </div>
        </Callout>
    {/if}
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

        .callout-truncations {
            display: flex;
            flex-direction: column;
            align-items: baseline;
            gap: var(--layout-padding-xlarge);

            .flex.row {
                display: flex;
                flex-direction: row;
                gap: var(--layout-padding-small);
            }

            ul {
                list-style-type: disc;
                padding-left: 1rem;
            }
        }
    }
</style>
