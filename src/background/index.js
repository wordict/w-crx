import axios from "axios";

const contextMenus = [
    { id: "addNewVocab", title: "Add new vocabulary", contexts: ["selection", "page"] },
    { id: "addNewVocabWithTrans", title: "Add new vocabulary with translation", contexts: ["selection", "page"] },
]

function createContextMenus(){
    // creating sub context menus
    return contextMenus.map(menu => chrome.contextMenus.create(menu))
}

chrome.runtime.onInstalled.addListener(() => {

    createContextMenus()

    chrome.contextMenus.onClicked.addListener(function(info, tab){
        console.log("info: ", info)
        console.log("tab: ", tab)
        if (info.menuItemId === "addNewVocab" && !info.selectionText){
            //  /vocabulary
        }else if(info.menuItemId === "addNewVocab" && info.selectionText) {
            axios.post('backend-url', { vocab : info.selectionText})
                .then((r) => console.log(r.status))
                .catch((e) => console.log(e))
        }
        const baseURL = "http://en.wikipedia.org/wiki/"
        const newURL = baseURL + info.selectionText;

        chrome.tabs.create({ url: newURL });
    })

});


