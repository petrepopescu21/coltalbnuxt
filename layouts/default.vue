<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <navbar/>
    <sidebar/>
    <nuxt/>
  </div>
</template>

<script>

import Sidebar from '../components/Sidebar.vue'
import Navbar from '../components/Navbar.vue'
export default {
  components: {
    Sidebar,
    Navbar
  }
}
</script>

<style>
body {
  margin: 0;
}

.coltalb-chip {
  background-color: rgba(255, 255, 255, 0);
}



/* Disable ugly boxes around images in IE10 */

a img {
  border: 0px;
}

::-moz-selection {
  background-color: rgb(255, 64, 129);
  color: #fff;
}

::selection {
  background-color: rgb(255, 64, 129);
  color: #fff;
}

.coltalb-search-box .mdl-textfield__input {
  color: rgba(0, 0, 0, 0.87);
}


.mdl-textfield--expandable {
  width: auto;
}

.coltalb-fab {
  position: absolute;
  right: 20%;
  bottom: -26px;
  z-index: 3;
  /*background: #64ffda !important;*/
  color: black !important;
}

.coltalb-mobile-title {
  display: none !important;
}




.coltalb-navigation-container {
  /* Simple hack to make the overflow happen to the left instead... */
  direction: rtl;
  -webkit-order: 1;
  -ms-flex-order: 1;
  order: 1;
  width: 500px;
  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1),
  width 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.coltalb-navigation {
  /* ... and now make sure the content is actually LTR */
  direction: ltr;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  width: 800px;
}

.coltalb-search-box.is-focused+.coltalb-navigation-container {
  opacity: 0;
  width: 100px;
}


.coltalb-navigation .mdl-navigation__link {
  display: inline-block;
  height: 60px;
  line-height: 68px;
  background-color: transparent !important;
  border-bottom: 4px solid transparent;
}

.coltalb-navigation .mdl-navigation__link:hover {
  border-bottom: 4px solid rgb(3, 169, 244);
}

.coltalb-search-box {
  -webkit-order: 2;
  -ms-flex-order: 2;
  order: 2;
  margin-left: 16px;
  margin-right: 16px;
}

.coltalb-more-button {
  -webkit-order: 3;
  -ms-flex-order: 3;
  order: 3;
}



.coltalb-be-together-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: calc(100vh - 112px);
  width: auto;
  background-color: #f3f3f3;
  background: linear-gradient(rgba(3, 169, 244, 0.25), rgba(3, 169, 244, 0.45)), url('~assets/elisa.jpg');
  background-size: cover;
}

.recenter {
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
}

.logo-font {
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  line-height: 1;
  color: #fff;
  font-weight: 500;
}

.logo-image {
  height: 100%;
}

.coltalb-slogan {
  font-size: 52px;
  padding-top: 24px;
  align-self: flex-end;
  text-align: left;
  margin-left: 25px;
  font-family: 'Roboto', sans-serif;
  line-height: 60px;
  text-transform: uppercase;
}

.coltalb-sub-slogan {
  align-self: center;
  text-align: center;
  font-size: 30px;
  font-family: 'Roboto', sans-serif;
  margin-top: 40px;
  letter-spacing: 15px;
  font-weight: 300;
}

.coltalb-create-character {
  font-size: 21px;
  padding-top: 400px;
}

.coltalb-create-character a {
  text-decoration: none;
  color: #767777;
  font-weight: 300;
}

.coltalb-screen-section {
  position: relative;
  padding-top: 60px;
}

.coltalb-screens {
  text-align: right;
  width: 100%;
  white-space: nowrap;
  overflow-x: auto;
}

.coltalb-screen {
  text-align: center;
}

.coltalb-screen .coltalb-link {
  margin-top: 16px;
  display: block;
  z-index: 2;
}

.coltalb-image-link {
  text-decoration: none;
}

.coltalb-wear {
  display: inline-block;
  width: 160px;
  margin-right: 32px;
}

.coltalb-wear .coltalb-screen-image {
  width: 40%;
  z-index: 1;
}


.coltalb-phone {
  display: inline-block;
  width: 64px;
  margin-right: 48px;
}

.coltalb-phone .coltalb-screen-image {
  width: 100%;
  z-index: 1;
}


.coltalb-tablet {
  display: inline-block;
  width: 110px;
  margin-right: 64px;
}

.coltalb-tablet .coltalb-screen-image {
  width: 100%;
  z-index: 1;
}

.coltalb-tablet .coltalb-link {
  display: block;
  z-index: 2;
}


.coltalb-tv {
  display: inline-block;
  width: 300px;
  margin-right: 80px;
}

.coltalb-tv .coltalb-screen-image {
  width: 100%;
  z-index: 1;
}


.coltalb-auto {
  display: inline-block;
  width: 300px;
  overflow: hidden;
}

.coltalb-auto .coltalb-screen-image {
  display: block;
  height: 300px;
  z-index: 1;
}

.coltalb-flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 -5px;
}

.coltalb-flex-cta {
  margin: 0 5px
}

.coltalb-wear-section {
  margin-top: 35px;
  position: relative;
  background: url('~assets/timmy.jpg') center top no-repeat;
  background-size: cover;
  height: 90vh;
}

.coltalb-wear-band {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  background-color: rgba(51, 71, 79, 0.85);
}

.coltalb-wear-band-text {
  max-width: 800px;
  margin-left: 25%;
  padding: 24px;
  text-align: left;
  color: white;
}

.coltalb-wear-band-text p {
  padding-top: 8px;
}

.coltalb-link {
  text-decoration: none;
  color: rgb(3, 169, 244) !important;
}

.coltalb-link:hover {
  color: #7cb342 !important;
}

.coltalb-link .material-icons {
  position: relative;
  top: -1px;
  vertical-align: middle;
}

.coltalb-alt-link {
  text-decoration: none;
  color: rgb(3, 169, 244) !important;
  font-size: 16px;
}

.coltalb-alt-link:hover {
  color: rgb(3, 158, 233) !important;
}

.coltalb-alt-link .material-icons {
  position: relative;
  top: 6px;
}

.coltalb-customized-section {
  text-align: center;
}

.coltalb-customized-section-text {
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  padding: 80px 16px 0 16px;
}

.coltalb-customized-section-text p {
  padding-top: 16px;
}

.coltalb-customized-section-image {
  background: url('~assets/charlie.jpg') center 85% no-repeat;
  background-size: cover;
  height: 400px;
}

.coltalb-more-section {
  padding: 80px 0;
  max-width: 1044px;
  margin-left: auto;
  margin-right: auto;
}

.coltalb-more-section .coltalb-section-title {
  margin-left: 12px;
  padding-bottom: 24px;
}

.coltalb-card-container {}

.coltalb-card-container .mdl-card__media {
  overflow: hidden;
  background: transparent;
}

.coltalb-card-container .mdl-card__media img {
  width: 100%;
}

.coltalb-card-container .mdl-card__title {
  background: transparent;
  height: auto;
}

.coltalb-card-container .mdl-card__title-text {
  color: black;
  height: auto;
}

.coltalb-card-container .mdl-card__supporting-text {
  height: auto;
  color: black;
  padding-bottom: 56px;
}

.coltalb-card-container .mdl-card__actions {
  position: absolute;
  bottom: 0;
}

.coltalb-card-container .mdl-card__actions a {
  border-top: none;
  font-size: 16px;
}

.coltalb-footer {
  background-color: #fafafa;
  position: relative;
}

.coltalb-footer a:hover {
  color: rgb(3, 169, 244);
}

.coltalb-footer .mdl-mega-footer--top-section::after {
  border-bottom: none;
}

.coltalb-footer .mdl-mega-footer--middle-section::after {
  border-bottom: none;
}

.coltalb-footer .mdl-mega-footer--bottom-section {
  position: relative;
}

.coltalb-footer .mdl-mega-footer--bottom-section a {
  margin-right: 2em;
}

.coltalb-footer .mdl-mega-footer--right-section a .material-icons {
  position: relative;
  top: 6px;
}


.coltalb-link-menu:hover {
  cursor: pointer;
}

@media (max-width: 350px) {

  .coltalb-wear-section {
    height: 125vh !important;
  }
}



/**** Mobile layout ****/

@media (max-width: 900px) {

  .coltalb-wear-section {
    height: 90vh;
  }
  .coltalb-flex-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: -5px 5px;
  }

  .coltalb-flex-cta {
    margin: 5px 0px;
    width: 220px;
  }


  .coltalb-navigation-container {
    display: none;
  }

  .coltalb-title {
    display: none !important;
  }

  .coltalb-mobile-title {
    display: block !important;
    position: absolute;
    left: calc(50% - 70px);
    top: 12px;
    transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* WebViews in iOS 9 break the "~" operator, and WebViews in OS X 10.10 break
     consecutive "+" operators in some cases. Therefore, we need to use both
     here to cover all the bases. */
  .android.coltalb-search-box.is-focused~.coltalb-mobile-title,
  .coltalb-search-box.is-focused+.coltalb-navigation-container+.coltalb-mobile-title {
    opacity: 0;
  }

  .coltalb-more-button {
    display: none;
  }

  .coltalb-search-box.is-focused {
    width: calc(100% - 48px);
  }

  .coltalb-search-box .mdl-textfield__expandable-holder {
    width: 100%;
  }

  .coltalb-be-together-section {
    height: 350px;
  }

  .coltalb-slogan {
    align-self: center;
    line-height: normal;
    font-size: 25px;
    margin: 0 16px;
    padding-top: 8px;
  }

  .logo-image {
    height: 200px;
  }
  .recenter {
    flex-direction: column;
    height: 80%;
    width: auto;
  }



  .coltalb-sub-slogan {
    align-self: center;
    text-align: center;
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    margin-top: 8px;
    font-weight: 300;
    letter-spacing: normal;
  }

  .coltalb-create-character {
    padding-top: 200px;
    font-size: 16px;
  }

  .coltalb-create-character img {
    height: 12px;
  }

  .coltalb-fab {
    display: none;
  }

  .coltalb-wear-band-text {
    margin-left: 0;
    padding: 16px;
  }

  .coltalb-footer .mdl-mega-footer--bottom-section {
    display: none;
  }
}
</style>
