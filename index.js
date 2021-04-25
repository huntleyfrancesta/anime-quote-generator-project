const getQuote = () => {
        return fetch('https://animechan.vercel.app/api/random')
            .then(res => res.json())
    }
    //author,character, quote//
const makeQuoteDiv = (quote) => {
    const div = document.createElement('div')
    const p = document.createElement('p')
    const h3 = document.createElement('h3')
    const h4 = document.createElement('h4')

    h3.textContent = quote.anime
    p.textContent = quote.quote
    h4.textContent = quote.character

    div.appendChild(h3)
    div.appendChild(p)
    div.appendChild(h4)

    const quoteContainer = document.getElementById('quote-container');
    quoteContainer.innerHTML = ""
    quoteContainer.appendChild(div);

}

getQuote().then(data => {
    console.log("fetching...");
    console.log(data);
});
getQuote().then(quote => { makeQuoteDiv(quote) })

const appendChild = (quoteDiv) => {
    const quoteContainer = document.getElementById('quote-Container')
    quoteContainer.appendChild(quoteDiv)
}

const handleFetchError = () => {
    const quoteContainer = document.getElementById('quote-container ')
    const warning = document.createElement('p')

    warning.textContent = "something went wrong here..."

    quoteContainer.append(warning)
}

const generateQuote = () => {
    getQuote().then((quote) => {
            const quoteDiv = makeQuoteDiv(quote)
            appendChild(quoteDiv)
        })
        .catch(handleFetchError)
}

getQuote().then(quote => {
    const quoteDiv = makeQuoteDiv(quote)
    console.log(quoteDiv)
})