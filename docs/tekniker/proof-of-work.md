---
layout: default.hbs
title: Proof of Work (PoW)
description: En konsensusmodell där miners utför kostsamma beräkningar för att beräkna miljoner kontrollsummor i sekunden, och där vinnaren belönas i valutans mynt.
mainImage: img/proof-of-work.webp
author: Tony Gustafsson
created: 2019-07-22
modified: 2019-07-30
---

# Proof of Work (PoW)

![Proof of Work](../img/proof-of-work.webp 'Proof of Work')

Proof of Work (Bevis på arbete) är en konsensusmodell där alla gruvnoder (miners) utför kostsamma beräkningar, där processorkraft eller grafikprocessorkraft används för att generera stora antal gissningar sekunden, och den som gissar rätt först "vinner". De belönas därmed med ett pris. Det går däremot snabbt att verifiera att en av dessa gissningar är rätt, vilket gör systemet utmärkt att använda för kryptovalutor så som [Bitcoin](/kryptovalutor/bitcoin.html) och [Litecoin](/kryptovalutor/litecoin.html).

Bitcoin var dock inte först ut med att använda denna modell. Den uppfanns redan 1993 av Cynthia Dwork och Moni Naor, men blev känd först 2009 i och med Bitcoin.

## Hasher / Kontrollsummor

Det som "gissas" fram är hasher/kontrollsummor, vilket är en teknisk benämning på en relativt kort sträng med bokstäver och siffror. Ofta används de för att ta fram en slags sammanfattning på en fil som kan verifiera en fils autenticitet. Det används också för att lagra användares lösenord i en databas, där man kan hasha användarens lösenord vid inloggning och jämföra med det som står i databasen. Om databasen råkar ut för intrång så kan lösenorden inte utläsas då det är en envägskryptering.

Detta är ett exempel på en kontrollsumma på "Detta är en test", genererad med SHA-256:

```
e6fa10085b270d8eaeeb21e037287e58e20e3a526950db97663d3d4072b8fc2e
```

## Svårighetsgrad

Alla miners i exempelvis Bitcoin-nätverket gissar alltså fram miljoner kontrollsummor i sekunden, vilket kostar mycket tid och pengar i elektricitet, men den som gissar rätt blir alltså belönad med Bitcoins. Det som hashas är blockets (som innehåller x antal transaktioner) header, och det som ska komma ut som resultat är en hash som inleds med 18 st nollor. Antalet nollor som krävs ändras efter 2016 block, vilket bestämmer svårighetsgraden. Ju mer beräkningskraft som finns i nätverket, desto högre blir svårighetsgraden. Något som automatiskt regleras av nätverket.

Det tar vanligtvis flera minuter att beräkna fram en hash som motsvarar svårighetsgraden. I Bitcoins fall tar det ca 10 minuter i dagsläget, vilket även motsvarar transaktionstiden. Det kräver enorma mängder energi för att lyckas, därför belönas man i dagsläget med 12,5 Bitcoins (i skrivandets stund ca 1,1 miljoner SEK). Men detta är en summa som halveras med bestämda intervall. Nästa halvering sker i maj 2020.

I [Bitcoins](/kryptovalutor/bitcoin.html) begynnelse gick det utmärkt att mina på en vanlig dator - framför allt med en med ett bra grafikkort. Men då specialkonstruerade datorer (ASICs - Application Specific Integrated Circuit) skapades, som är exceptionellt duktiga på just hashing, så ökade svårighetsgraden fort. I dag är det därför i princip omöjligt att lyckas knäcka en godtagbar hash i tid med en vanlig dator.

![Mining farm](../img/mining-farm.webp 'Mining farm') _Ett exempel på en miningfarm med ASICs, specialbyggda för att generera kontrollsummor._

Det fina med Proof of Work är att det är det tidigare blocket som hashas, och på så sätt försäkrar man hela tiden föregående block (därav skapas en kedja med block, därav "[Blockkedja](/tekniker/blockkedjor.html)" Det blir därför extremt svårt att ta fram ett förfalskat block med transaktioner. Och då det finns tusentals miners, där alla parter validerar varandra, så anses Proof of Work som väldigt säkert. Ingen har hittills lyckats hacka Bitcoin.

![Förklaring av Proof of Work](../img/proof-of-work-explanation.webp 'Förklaring av Proof of Work')

Nackdelarna är förstås att det går långsamt och kräver mycket energi. Därför rör sig många moderna kryptovalutor sig bort från denna konsensusmodell, mot ex [Proof of Stake](/tekniker/proof-of-stake.html) eller [DAGs](/tekniker/riktade-acykliska-grafer.html). Mycket kritik har riktats mot Bitcoin just, för att man beräknat att kraften för att hålla nätverket flytande kräver lika mycket elektricitet som hela Schweiz använder, eller 0,5% av hela världens elektricitetkonsumtion. Men man får förstås även fråga sig hur mycket energi som krävs i framställningen och transporten av guld, och även kring hela bankväsendet.
