<script>
export default {
  data() {
    return {
      checkedApi: [], //Api selectionnées
      displayedQuote: "", //citation affichée
      displayedAuthor: "", //auteur de la citation affichée
      otherDisplay: "", //autre affichage
      postItColor: "var(--color-one)", //couleur du post-it
      //api par défaut
      api: {
        name: "none",
        url: "",
        json: {},
      },
      //Ici, je définis les formats des Apis que je vais utiliser
      apiList: [],
    };
  },
  methods: {

    getAllApis()  {
      fetch("http://localhost:8080/apis/getAllApis", {
        mode: 'cors'
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        this.apiList = data;  // Make sure to assign to apis.value
        console.log(data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        apis.value = [];  // Reset apis or set a default state
      });
    },  

    //récupère une citation pour L'api DummyJson qui récupère une liste de citations et non une seule.
    randomDummy() {
      return Math.floor(Math.random() * 99) + 1;
    },
    //récupère une citation
    getRandomApi() {
      let random = Math.floor(Math.random() * this.checkedApi.length);
      return this.checkedApi[random];
    },

    //change la couleur du post-it
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
      if (this.api.name === "DummyJson") {
        this.api.url = "https://dummyjson.com/quotes/" + this.randomDummy();
      }
      fetch(this.api.url)
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          //On teste toutes les Api, et on récupère les données dans les clés correspondantes, car chaque api donne les données dans des clés différentes
          if (this.api.name === this.apiList[0].name) {
            //AnimeChan
            (this.displayedAuthor = json.character),
              (this.displayedQuote = json.quote),
              (this.otherDisplay = json.anime);
          } else if (this.api.name === this.apiList[1].name) {
            //GoProgram
            (this.displayedAuthor = json.author),
              (this.displayedQuote = json.quote),
              (this.otherDisplay = "");
          } else if (this.api.name === this.apiList[2].name) {
            //Kanye West
            (this.displayedAuthor = "Kanye West"),
              (this.displayedQuote = json.quote),
              (this.otherDisplay = "");
          } else if (this.api.name === this.apiList[3].name) {
            //Donald Trump
            (this.displayedAuthor = "Donald Trump"),
              (this.displayedQuote = json.message),
              (this.otherDisplay = "");
          } else if (this.api.name === this.apiList[4].name) {
            //James Clear
            (this.displayedAuthor = "James Clear"),
              (this.displayedQuote = json.text),
              (this.otherDisplay = "");
          } else if (this.api.name === this.apiList[5].name) {
            //Chuck Norris
            (this.displayedAuthor = "Chuck Norris"),
              (this.displayedQuote = json.value),
              (this.otherDisplay = "");
          } else if (this.api.name === this.apiList[6].name) {
            //Stoicism
            (this.displayedAuthor = json.author),
              (this.displayedQuote = json.quote),
              (this.otherDisplay = "");
          } else if (this.api.name === this.apiList[7].name) {
            //Game of Thrones
            (this.displayedAuthor = json.character.name),
              (this.displayedQuote = json.sentence),
              (this.otherDisplay = "");
          } else if (this.api.name === this.apiList[8].name) {
            //Geek Jokes
            (this.displayedQuote = json.joke),
              (this.displayedAuthor = "Geek Jokes"),
              (this.otherDisplay = "");
          } else if (this.api.name === this.apiList[9].name) {
            //Dog Facts
            (this.displayedQuote = json.facts[0]),
              (this.displayedAuthor = "Dog Facts"),
              (this.otherDisplay = "");
          } else if (this.api.name === this.apiList[10].name) {
            //DummyJson
            (this.displayedAuthor = json.author),
              (this.displayedQuote = json.quote),
              (this.otherDisplay = "");
          } else {
            console.log("error no api");
          }
          this.changePostItColor();
        });
    },
  },
  mounted(){
    this.getAllApis();
  }
};
</script>
<template>
  <div class="quoteComponent">
    <div class="source">
      <h2>Choose your Source</h2>
      <label v-for="api in apiList" :key="api.name">
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
        <button
          @click="requestApi"
          :disabled="checkedApi.length === 0"
          class="button-55"
        >
          Get a quote
        </button>
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
/* CSS  pour la div Post-it */
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
