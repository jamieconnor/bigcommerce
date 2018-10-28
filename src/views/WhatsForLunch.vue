<template>
  <div v-if="ingredients.length && recipes.length" @click="whatsForLunch">
    <div class="container">
      <h1>What&#039;s for Lunch?</h1>
      <div class="instructions">Click any where to find out what you can make</div>

      <div v-if="possible.length" class="items yummy">
        <h2>You Can Make This (yummy)</h2>
        <ul>
          <li v-for="recipe in possible">
            <i class="fas fa-check-circle"></i>{{ recipe.title }}
          </li>
        </ul>
      </div>
      <div v-if="possiblyNot.length" class="items stinky">
        <h2>You Can Make This (stinky)</h2>
        <ul>
          <li v-for="recipe in possiblyNot">
            <i class="fas fa-check-circle"></i>{{ recipe.title }}
          </li>
        </ul>
      </div>

      <div class="items ingredients">
        <h2>Ingredients You&#039;ve Got</h2>
        <ul>
          <li v-for="ingredient in ingredients">
            <i class="fas fa-check-circle"></i>{{ ingredient.title }}
          </li>
        </ul>
      </div>
    </div>
    <div class="recipes">

    </div>
  </div>
</template>

<script>
  const _ = require('lodash');
  const moment = require('moment');

  export default {
    name: 'WhatsForLunch',
    data() {
      return {
        ingredients: [],
        recipes: [],
        timezone: '',
        possible: [],
        possiblyNot: []
      }
    },
    mounted() {
      this.getIngredients();
      this.getRecipes();
    },
    methods: {
      getIngredients() {
        this.$http.get('ingredients.json').then(response => {
          this.ingredients = response.body.ingredients;
        }, response => {
          console.error('could not get ingredients');
        });
      },
      getRecipes() {
        this.$http.get('recipes.json').then(response => {
          this.recipes = response.body.recipes;
        }, response => {
          console.error('could not get ingredients');
        });
      },
      whatsForLunch() {
        // clear previous results
        this.possible = [];
        this.possiblyNot = [];

        // check if we have the ingredients
        this.recipes.forEach((recipe) => {
          let available = true;
          let gettingStinky = false;
          recipe.ingredients.forEach((ingredient) => {
            if (available) {
              const now = moment();
              const haveThis = _.find(this.ingredients, o => {
                const useBy = moment(o['use-by']);
                return ingredient === o.title && now.isBefore(useBy);
              });
              if (haveThis) {
                const bestBefore = moment(haveThis['best-before']);
                if (now.isAfter(bestBefore)) {
                  gettingStinky = true;
                }
                return;
              }
              available = false;
            }
          });
          if (available && gettingStinky) {
            this.possiblyNot.push(recipe)
          } else if (available) {
            this.possible.push(recipe);
          }
        });
      }
    }
  }
</script>