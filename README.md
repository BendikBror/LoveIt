# Applikasjon for dating, LoveIt

Dette er en applikasjon for sammenligning av datingprofiler som henter brukerdata fra Random User API. Applikasjonen lar brukere samhandle med profilene ved å matche eller fjerne matchede profiler.

## Funksjoner

- Henter brukerprofiler fra Random User API basert på valgt kjønn.
- Viser brukerprofiler med bilde, navn og alder.
- Brukere kan velge å si "Nei" eller "Ja" som svar på en profil.
- Matching: Hvis brukeren velger "Ja", er det en 25% sjanse for å få en match. Ved en match vises en matchet profil i venstre vindu på skjermen.
- Fjerning av match: Brukere kan klikke på sletteknappen i hjørnet av hver match for å slette personen.

## Installasjon

1. Klon repositoriet: `git clone https://github.com/BendikBror/LoveIt.git`
2. Åpne index.html-filen i nettleseren din via VS Code.

## Bruk

1. Ved åpning av applikasjonen, vil man måtte Klikke på "Mann" eller "Kvinne" for å velge kjønn for henting av brukerprofiler.
2. brukerprofiler vil bli hentet ut ifra hvilket kjønn de er fra Random User API og vises i midtdelen av skjermen.
3. Profiler med bilde, navn og alder vil vises i midtdelen.
4. Klikk på "Nei" for å fjerne gjeldende profil og hente en ny.
5. Klikk på "Ja" for 25% sjanse for å få en match. Når du får en match vises samme match i en profil i venstre del.
6. For å fjerne en match, klikk på sletteknappen på en matchet profil og bekreft slettingen i prompten.

## Koding brukt

- JavaScript
- HTML
- CSS