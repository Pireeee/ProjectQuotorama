<script lang="ts">
export default {
    data() {
        return {
            displayedQuote: '',
            dispayedAuthor: '',
            otherDisplay: '',
            //api utilisée
            api:{
                name: 'none',
                url: '',
                json: {
                }
            },
            //api animechan
            apiAnime:{
                name: 'Anime Chan',
                url: 'https://animechan.vercel.app/api/random',
                json: {
                    anime: '',
                    character: '',
                    quote: '',
                }
            },
            //api goprogram
            apiGoProgram:{
                name: 'Go Program',
                url: 'https://api.goprogram.ai/inspiration',
                json: {
                    quote: '',
                    author: '',
                }
            },
            //api kanye
            apikanye:{
                name: 'Kanye West',
                url: 'https://api.kanye.rest/',
                json: {
                    quote: '',
                }
            },
            //api trump
            apitrump:{
                name: 'Donald Trump',
                url: 'https://api.whatdoestrumpthink.com/api/v1/quotes/random',
                json: {
                    message: '',
                }
            },
        }
    },
    methods: {
        //change l'api utilisée
        changeApi(){
            if(this.api.name == this.apiAnime.name){
                this.api = this.apiGoProgram
            }else if(this.api.name == this.apiGoProgram.name){
                this.api = this.apikanye
            }else if(this.api.name == this.apikanye.name){
                this.api = this.apitrump
            }else if(this.api.name == this.apitrump.name){
                this.api = this.apiAnime
            }else{
                this.api = this.apiAnime
            }
        },

        //fais une requête à l'api pour récupérer les citations
        requestApi(){
        fetch(this.api.url)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                //si l'api est animechan, on récupère les données dans les clés anime, character et quote
                if(this.api.name == this.apiAnime.name){
                    this.dispayedAuthor = json.character,
                    this.displayedQuote = json.quote,
                    this.otherDisplay = json.anime
                }else if (this.api.name == this.apiGoProgram.name){ //sinon on récupère les données dans les clés author et quote
                    this.dispayedAuthor = json.author,
                    this.displayedQuote = json.quote,
                    this.otherDisplay = ''
                }
                else if (this.api.name == this.apikanye.name){ //sinon on récupère les données dans la clé quote
                    this.dispayedAuthor = 'Kanye West',
                    this.displayedQuote = json.quote,
                    this.otherDisplay = ''
                }
                else if( this.api.name == this.apitrump.name){ //sinon on récupère les données dans la clé message
                    this.dispayedAuthor = 'Donald Trump',
                    this.displayedQuote = json.message,
                    this.otherDisplay = ''
                }
                else{
                    console.log('error no api');
                }
            })
        }
    }
}
</script>
<template>
    <div>
        <button @click="changeApi">Change API</button>
        <p>curent API : {{ api.name }}</p>
        <button @click="requestApi">Get a quote</button>
        <div class="post-it">
            <h2 id="quote">{{ displayedQuote }}</h2>
            <p id="author">{{ dispayedAuthor }}</p>
        </div>
    </div>
</template>
<style>
h2 {
  font-weight: bold;
  font-size: 2rem;
}
p {
  font-family: 'Reenie Beanie';
  font-size: 2rem;
  left: 0;
}
.post-it{
  text-decoration:none;
  color:#000;
  background:#ffc;
  display:block;
  height:auto;
  width:40em;
  padding:1em;
  box-shadow: 5px 5px 7px rgba(33,33,33,.7);
  transform: rotate(-1deg);
  transition: transform .15s linear;
}
.post-it:hover, .post-it:focus{
  box-shadow:8px 8px 7px rgba(0,0,0,.7);
  transform: scale(1.01) rotate(-1deg);
  position:relative;
  z-index:5;
}
</style>