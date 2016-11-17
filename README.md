# Installera

Kör `npm install` för att installera alla bibliotek

# Köra

Använd `ng serve` för att starta applikationen. Surfa mot http://localhost:4200

# Delar

Exemplet har för närvarande fem olika controllers som alla gör lite olika saker.

## DataService

Den här servicen håller alla delade datakällor. Den innehåller:

* **tick** - en intervallkälla som en gång per sekund publicerar ett nytt slumptal
* **siffror** - En källa som innehåller en siffra till den finns även `addSiffra` som byter siffra i datakällan (add är inte riktigt namn)
* **delkrav** - En källa som håller en lista med delkrav. För att ladda listan från servern så används `loadAllDelkrav`. Anropar en webbservice för att hämta delkrav [mockapi](http://mockapi.io/) sedan uppdaterar den den lokala cachen av delkrav. Den har även `addDelkrav` som lägger till ett delkrav via en rest-service och sedan lägger det nya delkravet till den lokala cachen.

## Delkrav

Denna controller visar hur man prenumerarar på en observable och binder den till sidan med `*ngFor` och `async`. Den visar också hur man kopplar ett event på en knapp.

## Delkrav2

Visar hur man kan dela en datakälla mellan två controllers eftersom servicar är singletons. Visar även på hur man använder [map](http://reactivex.io/documentation/operators/map.html) för att mappa en lista med delkrav till en typ som vi vill ha. 

Observera att rx operatorn [filter](http://reactivex.io/documentation/operators/filter.html) inte skulle fungera här eftersom källan innehåller en lista inte enskilda värden. Därav mappar vi och använder Typescripts filterfiunktion för att filtrera.

## Siffra

Här prenumerarar controllern på `siffror` från dataservicen och visar den sifra som för tillfället ligger där. Den visar även hur man använder [buffer](http://reactivex.io/documentation/operators/buffer.html) för att behålla en lista med dom senast publicerade värdena.

## Intervall

Prenumererar på `tick` och visar hur man med [combineLatest](http://reactivex.io/documentation/operators/combinelatest.html) kan ta det senast sedda värdet från två olika observables för att skapa en ny observable. Detta skiljer från [merge](http://reactivex.io/documentation/operators/merge.html) och det kan vara bra att förstå hur det fungerar.

## Event

Slutligen så visar denna controller hur man skapar observables från events. Den mappar dessa events till ett användbart format och visar hur mankan undvika att hantera alla events utan bara ett inom varje tidsintervall med med [debounce](http://reactivex.io/documentation/operators/debounce.html). Det finns även ett enkelt exempel på hur man med [scan](http://reactivex.io/documentation/operators/scan.html) kan reducera en störm av värden till ett värde på ett enkelt sätt.

# Test

Nä varken `ng e2e` eller `ng test` kommer att göra något vettigt. Det har jag helt skippat.
