/**
 * No real person names will be included in this test data set.
 *
 * Test data is generated from https://www.firstvoices.com/ using words/phrases
 * from Indigenous languages used in BC.
 *
 * Names are not meant to be representative of real names/people.
 */

interface TestPersonNameData {
    legalFirstName: string;
    legalMiddleName: string;
    legalLastName: string;
    alternateFirstName: string;
    alternateMiddleName: string;
    alternateLastName: string;
}

// All alternate names fields pass ASCII, pass length.
// From: PAFNW Anihšināpēmowin
//       https://www.firstvoices.com/pafnw-anihsinapemowin/
export const passesLengthValidation: TestPersonNameData = {
    // https://www.firstvoices.com/pafnw-anihsinapemowin/phrases/3aa7ef6c-3645-4f38-b6aa-b0d31a2506b1
    legalFirstName: 'ᐃᔥᐱᒥᓐᒃ',

    // https://www.firstvoices.com/pafnw-anihsinapemowin/phrases/98566f93-56f7-48b1-93c2-04d14cc6305f
    legalMiddleName: 'ᐊᐧᐁᐦ',

    // https://www.firstvoices.com/pafnw-anihsinapemowin/phrases/cfa06399-9a39-474c-94cd-d0fa3c6fb83c
    legalLastName: 'ᐊᐧᐁᓀᓐᒫᒻᐲᓅᓐᑯᒻ',

    alternateFirstName: 'Inthesky', // Length: 8
    alternateMiddleName: 'Itis', // Length: 4
    alternateLastName: 'Whoisheretoday', // Length: 14
};

// All alternate name fields pass ASCII, fail length.
// From: Dakelh / Southern Carrier
//       https://www.firstvoices.com/dakelh-southern-carrier
export const failsLengthValidation: TestPersonNameData = {
    // https://www.firstvoices.com/dakelh-southern-carrier/phrases/41c6e920-c297-45ae-a94d-08e55664c146
    legalFirstName: '’acho ’int’en ’aow’et natodut’as.',

    // https://www.firstvoices.com/dakelh-southern-carrier/phrases/19379c17-2e65-4bf1-91c6-215ca864d01d
    legalMiddleName: '’alinchus suba nilht’oos.',

    // https://www.firstvoices.com/dakelh-southern-carrier/phrases/71dd3069-d681-47c4-8c9f-fa66e093b143
    legalLastName: '’ama ’ink’ez ’aba bulh nts’e teh’az?',

    alternateFirstName: 'hurryupandletusgohome', // Length: 21
    alternateMiddleName: 'peeltheorangesforme', // Length: 19
    alternateLastName: 'wherearebothofyougoing', // Length: 22
};

// All alternate name fields fail ASCII, pass length
// From: Nadleh-Stella Whut’enne
//       https://www.firstvoices.com/nadleh-stella-whutenne
export const failsAsciiValidation: TestPersonNameData = {
    // https://www.firstvoices.com/nadleh-stella-whutenne/words/a4e8abef-c675-47da-bfda-7a9ff584daab
    legalFirstName: 'behoonji',

    // https://www.firstvoices.com/nadleh-stella-whutenne/phrases/de0ab07f-af34-47d4-8a6e-c205ecaaac4a
    legalMiddleName: 'nyah',

    // https://www.firstvoices.com/nadleh-stella-whutenne/words/39007efb-f0a7-4906-9856-7842b3f86d73
    legalLastName: 'detnik na’nanguz',

    alternateFirstName: 'Њbehoonji', // Length: 9
    alternateMiddleName: 'Њnyah', // Length: 5
    alternateLastName: 'detnik na’nanguz', // Length: 16
};
