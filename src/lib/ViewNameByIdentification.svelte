<div class="page-view-name-by-id">
    <h1>
        Step 4: How will my name and alternate spelling look in different places
    </h1>

    <fieldset id="identification-type">
        <legend>
            Select an ID type or service type to see how your Full Legal Name
            and/or Alternate Spelling will look
        </legend>

        <div>
            <input
                type="radio"
                name="identification-type"
                id="birth-change-of-name"
                value="birth-change-of-name"
            />
            <label for="birth-change-of-name">
                BC Birth / Change of Name Certificate
            </label>
        </div>
        <div>
            <input
                type="radio"
                name="identification-type"
                id="services-card"
                value="services-card"
            />
            <label for="services-card">BC Services Card</label>
        </div>
        <div>
            <input
                type="radio"
                name="identification-type"
                id="bcid-drivers-licence"
                value="bcid-drivers-licence"
            />
            <label for="bcid-drivers-licence">BCID/BC Drivers Licence</label>
        </div>
        <div>
            <input
                type="radio"
                name="identification-type"
                id="status-card"
                value="status-card"
            />
            <label for="status-card">Status Card</label>
        </div>
        <div>
            <input
                type="radio"
                name="identification-type"
                id="social-insurance-number"
                value="social-insurance-number"
            />
            <label for="social-insurance-number">
                Social Insurance Number (SIN)
            </label>
        </div>
        <div>
            <input
                type="radio"
                name="identification-type"
                id="canadian-passport"
                value="canadian-passport"
            />
            <label for="canadian-passport">Canadian Passport</label>
        </div>
    </fieldset>

    <h2>Full Legal Name</h2>
    <p class="name-display">
        <!-- TODO: Replace with dynamically generated name -->
        Legal Name entry displayed here
    </p>

    <h2>Alternate Spelling</h2>
    <p class="name-display">
        <!-- TODO: Replace with dynamically generated name -->
        Alternate Spelling entry displayed here
    </p>

    <p>
        <strong>Note:</strong> Feel free to screenshot this page to share with your
        family, community language teachers and to discuss next steps with the Name
        Support Team
    </p>
</div>

<style>
    .page-view-name-by-id {
        > * {
            margin: var(--layout-margin-large) 0;
        }

        fieldset#identification-type {
            legend {
                font-weight: 700;
                margin-bottom: var(--layout-margin-large);
            }
        }

        h2 {
            margin-bottom: 0;

            + p {
                margin-top: 0;
            }
        }

        p.name-display {
            font-size: 1.5rem;
            font-weight: 700;
            line-height: 1.6875rem;
            margin: var(--layout-margin-xlarge) 0;
        }
    }
</style>
