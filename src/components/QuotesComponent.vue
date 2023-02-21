<script>
export default {
    data() {
        return {
            checkedApi: [],
            ApiList:[],//liste des apis utilisées
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
    mounted() {
        this.initApiList()
        this.api = this.apiAnime
    },
    methods: {
        //initialise la liste des apis utilisées
        initApiList(){
            this.ApiList.push(this.apiAnime)
            this.ApiList.push(this.apiGoProgram)
            this.ApiList.push(this.apikanye)
            this.ApiList.push(this.apitrump)
        },  

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

        getRandomApi(){
            let random = Math.floor(Math.random() * this.checkedApi.length)
            return this.checkedApi[random]
        },

        //fais une requête à l'api pour récupérer les citations
        requestApi(){
        this.api= this.getRandomApi();
        console.log(this.api);
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
        <h2>Choose your API</h2>
        <label v-for="api in ApiList" :key="api.name">
        <input type="checkbox" v-model="checkedApi" :value="api" checked="true">
        {{ api.name }}
        <br/>
        </label>
    </div>
    <div>  
        <button @click="requestApi">Get a quote</button>
        <br/>        
        <div class="post-it">
            <h2 id="quote">{{ displayedQuote }}</h2>
            <p id="author">{{ dispayedAuthor }}</p>
        </div>
    </div>
</template>
<style>
button{
    background:linear-gradient(45deg,var(--color-two),var(--color-one),var(--color-three),var(--color-four)); /* Green */
    border: none;
    color: black;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    transition-duration: 0.4s;
    border-radius: 12px;
    width: 30em;
}
button:hover{
    background:linear-gradient(45deg,var(--color-one),var(--color-two),var(--color-three),var(--color-four)); /* Green */
    color: white;
}
.post-it{
    display: inline-block;
    justify-content: center;
    text-align: center;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    text-decoration:none;
    color:#000;
    background:var(--color-one);
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
.post-it p{
    font-size:1.5rem;
    font-style:italic;
    margin:0;
    padding:0;
}
</style>