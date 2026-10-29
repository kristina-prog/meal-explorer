# Refleksjon – Spoonful

## Arbeidsprosess og valg av API

Det viktigste for meg da jeg skulle velge API til denne oppgaven, var å finne et som passet til kravene. Jeg har tidligere opplevd å velge et API uten bilder, noe som er kjedelig å oppdage når man allerede har kommet et godt stykke ut i utviklingen.

## Læring og utvikling

Jeg har først og fremst fått øvd på ting jeg kunne litt om fra før. Jeg har fått bedre forståelse for hvordan rutingen fungerer i Next.js, der mapper og filer i `app`-mappen bestemmer rutene automatisk. Jeg har også lært at man bruker klammer rundt mappenavnet, for eksempel `[id]`, for å lage dynamiske ruter.

Jeg har også brukt `npm run lint` underveis for å fange opp feil før jeg committer.

## Utfordringer og forbedringsmuligheter

Jeg ble skuffet da jeg oppdaget hvor dårlige kategoribildene fra TheMealDB så ut. Jeg prøvde først å hente et oppskriftsbilde fra hver kategori i stedet, men det førte til 14 ekstra API-kall. Jeg innså at det var en unødvendig løsning, og vurderte også å la brukerne utforske oppskrifter etter land i stedet. Til slutt valgte jeg å beholde kategoribildene. Jeg er fortsatt ikke helt fornøyd med hvordan «Browse by Category» ser ut, men innså at oppgaven var løst, og at jeg ikke trengte å bruke mer tid på akkurat dette.

Jeg var også litt usikker på hvordan jeg skulle løse søkefunksjonen med tanke på brukervennlighet. Slik søket fungerer nå, søker det bare etter oppskrifter som har søkeordet i navnet. Søker man for eksempel etter «pasta», får man bare ett treff, selv om det finnes en egen kategori med mange pastaretter. Jeg valgte å beholde søket slik det er, og heller gjøre det tydelig at man søker etter oppskriftsnavn. Med mer tid ville jeg forbedret søkefunksjonen slik at den også kunne søke etter kategorier.

## Design og universell utforming

Mot slutten av prosjektet fikk jeg litt ekstra tid og valgte å forbedre designet, som frem til da hadde vært nedprioritert. Jeg fant «Glow Pantry» på Dribbble og brukte det som inspirasjon til redesignet.

Jeg har også vært opptatt av å holde CSS-en ryddig, bruke globale fargevariabler og unngå duplisert styling. Da jeg testet nettsiden med WAVE og WCAG Contrast Checker, oppdaget jeg at den opprinnelige oransjefargen hadde for lav kontrast enkelte steder. Siden jeg hadde brukt globale fargevariabler, kunne jeg enkelt justere fargene for å få bedre kontrast.

## Erfaringer fra semesteret

Dette semesteret har jeg også blitt mer bevisst på hva jeg liker å jobbe med. Jeg synes det er gøy med Next.js fordi det er en så direkte sammenheng mellom det jeg koder og det som skjer på nettsiden. Med Payload og PostgreSQL opplever jeg at det blir mye koding og lite synlige resultater, og det synes jeg ikke er like motiverende. Jeg tror faktisk dette er oppgaven jeg har trivdes best med så langt, fordi jeg har fått fokusere på det jeg er mest interessert i: brukervennlighet (UX) og universell utforming (UU).
