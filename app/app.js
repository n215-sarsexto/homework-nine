// this import allows everything from model.js to be imported, also giving the prefix MODEL. Also, must remember to add .js to the end of first import
import * as MODEL from "../model/model.js";

function route() {
    let hashTag = window.location.hash;
    let pageName = hashTag.replace("#", "");
    let pageContent = pageName + "Content";

    if(pageName == ""){
        pageContent = "homeContent";
    }

    MODEL.modelPageName(pageContent);
}

function initListeners(){
    $(window).on("hashchange",route);
    route();
    }
    
    $(document).ready(function(){
        initListeners();
    });