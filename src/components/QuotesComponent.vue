<script>
export default {
  data() {
    return {
      checkedApi: [],
      ApiList: [], //liste des apis utilisées
      displayedQuote: "",
      displayedAuthor: "",
      otherDisplay: "",
      isLoading: true,
      postItColor: "var(--color-one)",
      //api utilisée
      api: {
        name: "none",
        url: "",
        json: {},
      },
      //api animechan
      apiAnime: {
        name: "Anime Chan",
        url: "https://animechan.vercel.app/api/random",
        json: {
          anime: "",
          character: "",
          quote: "",
        },
      },
      //api GoProgram
      apiGoProgram: {
        name: "Go Program (one per day)",
        url: "https://api.goprogram.ai/inspiration",
        json: {
          quote: "",
          author: "",
        },
      },
      //api Kanye
      apiKanye: {
        name: "Kanye West",
        url: "https://api.kanye.rest/",
        json: {
          quote: "",
        },
      },
      //api trump
      apiTrump: {
        name: "Donald Trump",
        url: "https://api.whatdoestrumpthink.com/api/v1/quotes/random",
        json: {
          quote: "",
        },
      },
      apiJamesClear: {
        name: "James Clear",
        url: "https://www.jcquotes.com/api/quotes/random",
        json: {
          text: "",
        },
      },
      apiChuckNorris: {
        name: "Chuck Norris (jokes)",
        url: "https://api.chucknorris.io/jokes/random",
        json: {
          value: "",
        },
      },
      apiStoicism: {
        name: "Stoicism",
        url: "https://api.themotivate365.com/stoic-quote",
        json: {
          quote: "",
          author: "",
        },
      },
      apiGameOfThrones: {
        name: "Game of Thrones",
        url: "https://api.gameofthronesquotes.xyz/v1/random",
        json: {
          sentence: "",
          character: {
            name: "",
          },
        },
      },
      apiGeekJokes: {
        name: "Geek Jokes",
        url: "https://geek-jokes.sameerkumar.website/api?format=json",
        json: {
          joke: "",
        },
      },
      apiDogFacts: {
        name: "Dog Facts",
        url: "https://dog-api.kinduff.com/api/facts",
        json: {
          facts: [],
        },
      },
    };
  },
  mounted() {
    this.isLoading = false;
    this.initApiList();
  },
  methods: {
    //initialise la liste des apis utilisées
    initApiList() {
      this.ApiList.push(this.apiAnime);
      this.ApiList.push(this.apiGoProgram);
      this.ApiList.push(this.apiKanye);
      this.ApiList.push(this.apiTrump);
      this.ApiList.push(this.apiJamesClear);
      this.ApiList.push(this.apiChuckNorris);
      this.ApiList.push(this.apiStoicism);
      this.ApiList.push(this.apiGameOfThrones);
      this.ApiList.push(this.apiGeekJokes);
      this.ApiList.push(this.apiDogFacts);
    },

    getRandomApi() {
      let random = Math.floor(Math.random() * this.checkedApi.length);
      return this.checkedApi[random];
    },
    changePostItColor() {
      let random = Math.floor(Math.random() * 4);
      if (random === 0) {
        this.postItColor = "var(--color-one)";
      } else if (random === 1) {
        this.postItColor = "var(--color-two)";
      } else if (random === 2) {
        this.postItColor = "var(--color-three)";
      } else if (random === 3) {
        this.postItColor = "var(--color-four)";
      }
    },

    //fais une requête à l'api pour récupérer les citations
    requestApi() {
      this.api = this.getRandomApi();
      console.log(this.api);
      fetch(this.api.url)
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          //si l'api est Animechan, on récupère les données dans les clés anime, character et quote
          if (this.api.name === this.apiAnime.name) {
            (this.displayedAuthor = json.character),
              (this.displayedQuote = json.quote),
              (this.otherDisplay = json.anime);
          } else if (this.api.name === this.apiGoProgram.name) {
            //sinon, on récupère les données dans les clés author et quote
            (this.displayedAuthor = json.author),
              (this.displayedQuote = json.quote),
              (this.otherDisplay = "");
          } else if (this.api.name === this.apiKanye.name) {
            //sinon, on récupère les données dans la clé quote
            (this.displayedAuthor = "Kanye West"),
              (this.displayedQuote = json.quote),
              (this.otherDisplay = "");
          } else if (this.api.name === this.apiTrump.name) {
            //sinon, on récupère les données dans la clé message
            (this.displayedAuthor = "Donald Trump"),
              (this.displayedQuote = json.message),
              (this.otherDisplay = "");
          } else if (this.api.name === this.apiJamesClear.name) {
            (this.displayedAuthor = "James Clear"),
              (this.displayedQuote = json.text),
              (this.otherDisplay = "");
          } else if (this.api.name === this.apiChuckNorris.name) {
            (this.displayedAuthor = "Chuck Norris"),
              (this.displayedQuote = json.value),
              (this.otherDisplay = "");
          } else if (this.api.name === this.apiStoicism.name) {
            (this.displayedAuthor = json.author),
              (this.displayedQuote = json.quote),
              (this.otherDisplay = "");
          } else if (this.api.name === this.apiGameOfThrones.name) {
            (this.displayedAuthor = json.character.name),
              (this.displayedQuote = json.sentence),
              (this.otherDisplay = "");
          } else if (this.api.name === this.apiGeekJokes.name) {
            (this.displayedQuote = json.joke),
              (this.displayedAuthor = "Geek Jokes");
          } else if (this.api.name === this.apiDogFacts.name){
            (this.displayedQuote = json.facts[0]),
              (this.displayedAuthor = "Dog Facts");
          } else {
            console.log("error no api");
          }
          this.changePostItColor();
        });
    },
  },
};
</script>
<template>
  <div class="quoteComponent">
    <div class="source">
      <h2>Choose your Source</h2>
      <label v-for="api in ApiList" :key="api.name">
        <input
          type="checkbox"
          v-model="checkedApi"
          :value="api"
          checked="checked"
        />
        {{ api.name }}
        <br />
      </label>
    </div>
    <div class="quote">
      <div>
        <button @click="requestApi" class="button-55">Get a quote</button>
      </div>
      <div class="post-it" :style="{ backgroundColor: postItColor }">
        <h2 id="quote">{{ displayedQuote }}</h2>
        <p id="author" class="auth">{{ displayedAuthor }}</p>
        <p id="other" class="other">{{ otherDisplay }}</p>
      </div>
    </div>
    <br />
    <br />
  </div>
</template>
<style>
.post-it {
  display: inline-block;
  justify-content: center;
  text-align: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, "Verdana", sans-serif;
  text-decoration: none;
  color: #000;
  height: auto;
  width: 30em;
  min-height: 25em;
  padding: 1em;
  margin: 4px 2px;
  box-shadow: 5px 5px 7px rgba(33, 33, 33, 0.7);
  transition: transform 0.15s linear;
}
.post-it:hover,
.post-it:focus {
  box-shadow: 8px 8px 7px rgba(0, 0, 0, 0.7);
  transform: scale(1.01) rotate(-1deg);
  position: relative;
  z-index: 5;
}
.post-it .auth {
  font-size: 1.5rem;
  font-style: italic;
  margin: 0 0 0 1em;
  padding: 0;
  text-align: right;
}
.post-it .other {
  font-size: 1rem;
  font-style: oblique;
  margin: 0 0 0 1em;
  padding: 0;
  text-align: right;
}
@media (max-width: 768px) {
  .post-it {
    width: 15em;
  }
}
</style>
