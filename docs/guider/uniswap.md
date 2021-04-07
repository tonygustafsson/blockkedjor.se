---
layout: default.hbs
title: Hur du använder Uniswap för kryptotrading
description: Uniswap är en av de mest populära decentralicerade exchanges idag, men är inte alltid alldeles enkel att använda.
mainImage: img/guides/uniswap/uniswap.webp
author: Tony Gustafsson
created: 2021-03-12
modified: 2021-03-12
---

# Uniswap

![Uniswap](/img/guides/uniswap/uniswap.webp 'Uniswap')

Uniswap är idag den absolut största [decentraliserade exchangen](/marknaden/exchanges.html). Att den är decentraliserad innebär att det inte finns någon central instans som tar avgifter eller lägger sig i orderläggningar, insättningar eller uttag. Det är en fri marknad mellan de som köper, säljer och de som erbjuder likviditet genom speciella pooler.

Det är [Ethereum](/kryptovalutor/ethereum.html) som gäller på Uniswap, och alla ERC-20-tokens därpå. Det kräver också en Ethereum-plånbok, så som [Metamask](/guider/metamask.html), WalletConnect, Coinbase Wallet, Fortmatic eller Portis.

Metamask är den vanligaste plånboken, och är det den du har tänkt att använda så rekommenderar vi att du [först förstår hur Metamask fungerar](/guider/metamask.html).

## Innehållsförteckning

-   [Prissättning](#hur-fungerar-prissättningen)
-   [Avgifter](#avgifter)
-   [Hitta tokens](#hitta-tokens)
-   [Att köpa](#att-köpa)
-   [Att sälja](#att-sälja)
-   [Mer information](#mer-information)

## Hur fungerar prissättningen?

Uniswap har ingen orderbok som en normal exchange/handlare. De kollar inte heller priser via en tredjepart, eller ett [orakel](/tekniker/orakel.html). I stället använder man en teknik kallad _Automatiskt likviditetsprotokoll_, eller Automated liquidity protocol. I korta drag handlar det om att på ett automatiskt sätt, med hjälp av [smarta kontrakt](/tekniker/smarta-kontrakt.html) kunna generera ett pris mellan två valutor.

Vem som helst kan sätta upp likviditetspooler mellan två valutor. Exempelvis 50% ETH och 50% REN, och denna balans kommer alltid upprätthållas, och agerar som pooler människor kan köpa från. När man tar valuta ur REN-poolen påverkas priserna eftersom tillgången förändras. Det skapar ett system som består av de som tillför likviditet, de som köper och de som säljer - helt utan en central instans.

![Uniswap](/img/guides/uniswap/uniswap-liquidity-pools.webp 'Uniswap')
_I en likviditetspool måste det alltid finnas lika mycket av vardera tradingpar_

## Avgifter

De som bidrar till likviditetspoolerna behöver ett incitament att bidra, därför går avgifterna från de som köper och säljer till dessa. Idag är avgiften 0.3% av varje trade, men det kan komma att sänkas framöver.

Tyvärr är avgiften 0.3% inte den enda avgiften, utan du behöver också betala [Ethereum](/kryptovalutor/ethereum.html)-miners för att validera din transaktion. Priset för detta varierar baserat på belastningen av nätverket, samt hur mycket du är villig att betala.

Oftast är det bästa alternativet att välja det snabbaste och dyraste alternativet när det gäller transaktionsavgifter på Uniswap eftersom en långsam transaktion ofta blir avbruten. Och en avbruten transaktion ger dig inte avgiften tillbaka. Oftast beror en avbruten trade på att priset har hunnit ändras för mycket innan transaktionen hann valideras.

En annan sak att tänka på är att du påverkar priset på valutor genom att köpa och sälja. Om du handlar med valutor som har väldigt små likviditetspooler så kan det hända att din trade påverkar priset så pass mycket att Uniswap säger _STOPP!_ Det kan öppna upp för att andra traders hinner före dig om de ser att priserna kommer förändras.

### Exempel på slippage/glidning

Du byter ETH mot REN och betalar 0.02 ETH i transaktionsavgift. Det annonseras på Ethereum-nätverket att transaktionen behöver valideras. Någon annan detekterar detta och kan beräkna (med robotar förstås) att det kommer öka värdet på REN för att du köper så pass mycket. De gör då kvickt en egen order på REN men betalar 0.05 ETH i transaktionsavgift, vilket gör att miners troligtvis kommer prioritera dennes transaktion. Vad händer då? Jo, priserna på REN hinner ändras innan ditt köp går igenom. Det uppstår då "slippage" eller glidning. Lyckligtvis tillåter inte Uniswap hur står slippage som helst.

## Hitta tokens

Man kan hitta de flesta tokens på Uniswap genom att klicka upp listan med knappen "Select a token". Det finns tusentals att välja på. Men om din token _inte_ listas här, så kan du eventuellt hitta det genom att söka upp ditt token på [CoinGecko](https://www.coingecko.com), klicka på fliken "Marknader" och klicka på Uniswap-paret där så kommer du direkt rätt.

![Uniswap](/img/guides/uniswap/uniswap7.webp 'Uniswap')
_Här ser du en lång lista med tokens att växla mellan på Uniswap_

En sista utväg är att ta reda på ditt tokens kontraktsadress, som du kan få tag i antingen på [CoinGecko](https://www.coingecko.com) eller [EtherScan](https://etherscan.io/). Du besöker sedan:

```
https://app.uniswap.org/#/swap?outputCurrency=[CONTRACT-ADDRESS]
```

## Att köpa

Besök https://app.uniswap.org/ och klicka på "Connect Wallet".

![Uniswap](/img/guides/uniswap/uniswap1.webp 'Uniswap')

Välj sedan vilken wallet du vill använda, exempelvis [Metamask](/guider/metamask.html). Har du Metamask installerad kommer den be om lösenord om du inte använt den på en stund. Välj kontot du vill ansluta med, och tryck Nästa. Acceptera signaturen - detta kostar ingenting.

![Uniswap](/img/guides/uniswap/uniswap2.webp 'Uniswap')

Nu förändras skärmen till något som liknar ovan. Du ser hur mycket du konverterar _från_ och hur mycket du kommer att få. "Minimum received" innebär att den tar hänsyn till Slippage/Glidning, så att om du accepterar att priset kan ändras 1% upp eller ner från det att du lägger beställningen tills det går igenom, så visar detta det minsta möjliga du kan få. Du kan ändra toleransen för slippage på kugghjulet uppe till höger.

När du är redo trycker på du på "Swap".

![Uniswap](/img/guides/uniswap/uniswap3.webp 'Uniswap')

Du ser nu en sammanställning på det hela. När du är redo trycker du på "Confirm Swap", varpå din plånbok bör öppnas automatiskt.

![Uniswap](/img/guides/uniswap/uniswap4.webp 'Uniswap')

Om du använder Metamask så kommer det att se ut något i stil med det här. Andra plånböcker ser annorlunda ut men följer ungefär samma koncept. Vill du veta mer om Metamask fungerar och vad du bör tänka på så kolla på [guiden för Metamask](/guider/metamask.html).

Det viktiga här är att se till att du betalar tillräckligt mycket i transaktionsavgift (Gas fee) för att transaktionen ska gå igenom. Återigen så är det avgiften till miners på Ethereum-nätet. Avgifterna till de som håller likviditetspoolerna har redan dragits av. Klicka på "EDIT" bredvid "Fas fee" för att ändra din avgift - välj snabbaste och dyraste om du vill vara säker på att det går igenom. Men naturligtvis vill man inte betala för mycket, särskilt inte om man köper för mindre summor. Då kan det vara idé att vänta. I Sverige är det ofta billigare avgifter på morgonen när USA fortfarande sover.

## Att sälja

För att sälja exempelvis TRAC mot ETH väljer du valutorna i _från_ och _till_. Och välj hur mycket du vill växla/swappa.

![Uniswap](/img/guides/uniswap/uniswap5.webp 'Uniswap')

Att sälja tokens fungerar egentligen på samma sätt som att köpa tokens. Eftersom det handlar om att växla tokens mellan varandra. Skillnaden uppstår om du vill växla en ERC-20-token mot Ethereum, eller om du vill växla en ERC-20-token mot en annan ERC-20-token. Det du då måste göra är att först godkänna att Uniswap har rätt att dra denna valuta från ditt konto. Detta är en transaktion på Ethereum-nätet och kostar därför en avgift. Men detta inträffar bara första gången du ska sälja en valuta, därefter kostar det inget att sälja samma valuta.

Du möts av nedanstående skylt om du använder Metamask. Du kan ändra din transaktionsavgift om du vill. Klicka sedan på "Bekräfta". Detta kan ta circa en minut, men få inte panik om det tar längre än så.

![Uniswap](/img/guides/uniswap/uniswap6.webp 'Uniswap')

När det är klart står det "Approved" på Uniswap och du kan då välja "Swap". Därefter följer samma procedur som [när du köper](#att-köpa).

## Mer information

-   https://uniswap.org/faq/
-   https://academy.binance.com/en/articles/what-is-an-automated-market-maker-amm
-   https://nightlycrypto.medium.com/what-the-heck-is-an-automated-market-maker-amm-3adb753ea5c7
