---
layout: default.hbs
title: Non-fungible tokens (NFTs)
description: Unika tokens som kan fungera som samlarobjekt eller bevis på ägarskap. Exempelvis tillbehör i spel eller ägarbevis på virtuellt land.
mainImage: img/non-fungible-tokens.webp
author: Tony Gustafsson
created: 2021-03-05
modified: 2021-03-05
---

# Non-fungible tokens (NFTs)

![Non-fungible tokens (NFTs)](/img/non-fungible-tokens.webp 'Non-fungible tokens (NFTs)')

## Vad innebär "fungibility"?

Non-fungible tokens kan översättas som "ickeombytliga symboler" och innebär egentligen tokens som är unika, och ej föränderliga. En valutas enheter är "ombytliga", dvs en krona är likvärdig med en annan krona. Men när det gäller Non-fungible tokens är det omvända sant - att varje enhet är unik och inte kan växlas mot en annan enhet.

För att något ska klassas som en NFT krävs det att:

-   Enheterna är en bristvara.
-   De kan inte delas upp i mindre delar, som ören på en krona.
-   De går inte att förstöra / ta bort.
-   Ägarskapet kan verifieras på en blockkedja.

## Vad används NFTs till?

Det självklara användningsområdet för NFTs blir förstås samlarobjekt, så som spelkort, vapen och skins i spel, digitalt/virtuellt landägarskap, digital konst och så vidare. Eftersom varje NFT är unik så kan en NFT motsvara exempelvis ett särskilt Pokemonkort som det bara finns _ett_ av. Det kortet är förstås extremt ovanligt, och kan prissättas därefter. Naturligtvis har det inget inbyggt värde, utan det handlar som vanligt om tillgång och efterfrågan.

Första gången NFTs blev populärt var [CryptoKitties](https://www.cryptokitties.co/) gjorde entré - ett spel/DAPP där man samlade unika katter. Varje katt härstammade från två andra katter och fick ett unikt "DNA", och fick ett unikt utseende, men även verifierbart unik på en blockkedja.

Det finns NFTs som sålts för oerhörda summor pengar. Exempelvis [en drakversion av en CryptoKittie](https://www.cryptokitties.co/kitty/896775) som såldes för 600 ETH, motsvarande 7,5 miljoner kronor i skrivandets stund. Och den typen av priser blir allt vanligare. Många undrar förstås, med all rätt, hur efterfrågan kan vara så stor på något som kanske inte har ett tydligt användningsområde, och svaret kan nog sammanfattas med:

-   Känslan av att äga något unikt.
-   Kunna sälja objektet dyrare senare.
-   Nya möjligheter och utseenden i spel.

![Dragon the CryptoKittie](/img/non-fungible-tokens-cryptokitty.webp 'Dragon the CryptoKittie') _CryptoKittyn 'Dragon' som såldes för 600 ETH._

## De mest populära samlarobjekten

Bland de mest populära NFTna hittar vi just nu är:

-   [CryptoPunks](https://www.larvalabs.com/cryptopunks)
-   [Sorare](https://sorare.com/)
-   [Hashmasks](https://www.thehashmasks.com/)
-   [SandBox](https://www.sandbox.game/en/)
-   [CryptoKitties](https://www.cryptokitties.co/)

## Marknadsplatser för NFTs

Vissa NFTs har egna marknadsplatser, exempelvis CryptoKitties, medan andra helt förlitar sig på tredjeparter. Då en NFT vilar på en blockkedja så är de frikopplade från centralicerade webbplatser och spel, och kan skickas runt fritt. Det gör att marknadsplatser kan erbjuda användare att lägga ut sina NFTs till ett pris eller erbjuda en auktion.

Populära marknadsplatserna för NFTs just nu är [OpenSea](https://opensea.io/) och [Rarible](https://rarible.com/).

## Teknik

Alla [blockkedjor](/tekniker/blockkedjor.html) klarar inte av att erbjuda NFTs. Det kräver bland annat att man kan skapa unika tokens på kedjan, och att [smarta kontrakt](/tekniker/smarta-kontrakt.html) erbjuds. Den vanligaste plattformen/blockkedjan för non-fungible tokens är [Ethereum](/kryptovalutor/ethereum.html), men många intressanta spelare börjar nu konkurrera.

[ERC-721](https://eips.ethereum.org/EIPS/eip-721) skapades tidigt 2018 och togs fram just med att kunna skapa unika symboler på Ethereum. Sedan dess är det nästan uteslutande varit denna teknik man använder sig av. På senare tid har dock [ERC-1155](https://eips.ethereum.org/EIPS/eip-1155) fått ett större fokus, och är ett tillägg som togs fram av skaparen från [Enjin](https://enjin.io/). Den tillför bland annat att varje NFT inte måste vara helt unik, utan kan finnas i exempelvis 100 upplagor. Det gör det mycket enklare för utvecklare att skapa exempelvis potions och vapen i ett spel. Man möjliggör också att kunna byta ägarskap på många NFT i samma transaktion vilket gör det snabbare och billigare.

![Usage of NFTs](/img/non-fungible-tokens-usage.webp 'Usage of NFTs')

[Ethereum](/kryptovalutor/ethereum.html) är än så länge ett dyrt och långsamt nätverk att köra spel och applikationer på. När efterfrågan trycker på så räcker det inte alltid till. Det håller även tillbaka populariteten för NFTs i viss mån. Det finns dock många andra blockkedjor som fokuserar mycket på NFTs, så som [Theta Network](https://www.thetatoken.org/), [Flow](https://www.onflow.org/), [Enjin](https://enjin.io/), [Decentraland](https://decentraland.org/) och [WAX](https://on.wax.io/wax-io/).

## Framtiden

Först och främst behöver man lösa problemet med skalbarheten. Om NFTs ska bli det nya Pokemon så behöver det gå snabbt att köpa och inte kosta skjortan. Därför kommer lager2-lösningar att användas inom kort, där man byter NFTs på ett lager ovanpå Ethereum. Vissa projekt så som [SuperFarm](https://www.superfarm.com/) har redan börjat titta på den här typen av lösningar. Det går att ta tillbaka sin NFT till lager 1 (Ethereum) när man vill, men mot en avgift.

En annan viktig framgångsfaktor för NFTs är möjligheten att flyttas mellan olika [blockkedjor](/tekniker/blockkedjor.html) (interchain). Om man har en unik enhet på Ethereum som representerar ett spelkort, kan man vilja flytta den vidare till Enjin och där ha samma unika värde. Detta kan möjliggöras tack vare att blockkedjorna använder samma protokoll (ex ERC-721).

I framtiden behöver en NFT inte heller bara vara samlarobjekt och lek, utan kan representera värden i den fysiska världen. Exempelvis visa ägarskapet på en tavla, ett hus eller en bil. Men det kräver förstås att lagen i det land objektet är i erkänner blockkedjan som ett värdebevis, annars blir det helt rotlöst. Men många tror att vi i framtiden har våra betyg, körkort och hus på blockkedjan.
