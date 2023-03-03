const Quotes=[
    {
    quote:`“If everything was perfect, you would never learn and you would never grow.” `,
    author:`"beyonce"`
    },
    {
    quote:`“No matter what happens in life, be good to people. Being good to people is a wonderful legacy to leave behind.” `,
    author:`"Taylor Swift"`
    },
    {
        quote:`“Never stop fighting no matter what anyone says. If it’s in your gut, your soul, there’s nothing, no worldly possession that should come between you and your expression.”`,
        author:`"Kanye West"`
    },
    {
        quote:`“One thing I’ve learned is that I’m not the owner of my talent; I’m the manager of it.” `,
        author:`"Madonna"`
    },
    {
        quote:`“You can’t knock on opportunity’s door and not be ready.” `,
        author:`"Bruno Mars"`
    },
    {
        quote:`“The roughest roads often lead to the top.”`,
        author:`"Christina Aguilera"`


    },
    {
        quote:`"Love is less about emotions and feelings. it is more about taking responsibility to serve the beloved" `,
        author:`"gaur gopal das"`
    },
    {
        quote:`"Do everything you have to do, but not with ego, not with lust, not with envy but with love, compassion, humility, and devotion."`,
        author:`"Lord Krishna"`
    },
    {
        quote:`"Life repeats itself mindlessly , unless you become mindfull . It will keep repeating like a wheel"`,
        author:`"osho"`
    },
    {
        quote:`"Follow your heart , minds can be manipulated not the other."`,
        author:`"unknown"`
    },
]
//access the elements 
const DisplayElem=document.getElementById('display');
const AuthorElem=document.getElementById('Author');
const Btn=document.getElementById('generate');

//function to generate different quotes
 const RandomQuote=()=>{
    //logic to generate
    let index=Math.floor(Math.random()*(Quotes.length))
    //to display the output of the quote
    DisplayElem.innerHTML=Quotes[index].quote
    //to displau the output of the authior
    AuthorElem.innerHTML='~'+Quotes[index].author

}

//button functionallity
//btn.onclick=randomquote
Btn.addEventListener('click',RandomQuote)