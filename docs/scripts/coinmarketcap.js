window.addEventListener('DOMContentLoaded', function() {
    var textBody = document.querySelector('.markdown-body');
    var regex = /CoinMarketCap\[(\d+)\]/g;
    var head = document.querySelector('head');

    if (textBody && textBody.innerText.match(regex)) {
        var match = regex.exec(textBody.innerText);

        if (!match || match.length < 1) return;

        var currencyId = match[1];

        // Append script to head to load snippet logic
        var coinMarketCapScript = document.createElement('script');
        coinMarketCapScript.src = 'https://files.coinmarketcap.com/static/widget/currency.js';
        head.appendChild(coinMarketCapScript);

        // Create snippet
        var coinMarketCapSnippet = document.createElement('div');
        coinMarketCapSnippet.className = 'coinmarketcap-currency-widget';
        coinMarketCapSnippet.setAttribute('data-currencyid', currencyId);
        coinMarketCapSnippet.setAttribute('data-base', 'USD');

        // Replace placeholder with snippet
        textBody.innerHTML = textBody.innerHTML.replace(regex, coinMarketCapSnippet.outerHTML);
    }
});
