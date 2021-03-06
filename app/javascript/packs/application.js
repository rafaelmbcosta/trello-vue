/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import Vue from 'vue/dist/vue.esm'
import App from '../app.vue'

document.addEventListener("turbolinks:load", function(){
    // pega o primeiro elemento com o id #boards
    var element = document.querySelector("#boards")
    // verifica se encontrou o elemento
    if ( element != undefined) {
        // vincula a instancia do APP ao elemento que encontrou
        // passa a list que esta na tag.div como paramentro para o app.vue
        const app = new Vue({
            el: element,
            data: {
                lists: JSON.parse(element.dataset.lists)
            },
            template: "<App :original_lists='lists' />",
            components: { App }
        })
    }
});

console.log('Hello World from Webpacker')
