
 
       AOS.init();
let quotes = document.getElementById("quotes");

        let author = document.getElementById("author");
        let newwwQ = document.getElementById('newwwQ');
        let tweet = document.getElementById("tweet");

        let orgdata = "";

        const tweethere = () => {

            let post_of_tweet = `https://twitter.com/intent/tweet?text=${Data_of_quotes.text}`;
            window.open(post_of_tweet);

        }



        let Data_of_quotes;
        const getting_newquotes = () => {
            let random = Math.floor(Math.random() * 1642);
            Data_of_quotes = orgdata[random];
            quotes.innerText = `${Data_of_quotes.text}`;
            author.innerText = `${orgdata[random].author}`;
            Data_of_quotes.author == null ? author.innerText = `unknown` : author.innerText = `${orgdata[random].author}`


        }


        var api = "https://type.fit/api/quotes";
        const Get_Random_Quotes = async () => {
            var api = "https://type.fit/api/quotes";
            try {
                let data = await fetch(api);
                orgdata = await data.json()
                getting_newquotes();




                // console.log(orgdata[20].text);
                // console.log(orgdata[20].author);

            } catch (error) {
                console.log("error is getting and connection is closed")

            };





        }
        tweet.addEventListener("click", tweethere)
        newwwQ.addEventListener("click", getting_newquotes);
        Get_Random_Quotes();