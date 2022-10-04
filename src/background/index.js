
const contextMenus = [
    { id: "addWithoutTrans", title: "Add without translation", contexts: ["selection", "page"] },
    { id: "addWithTrans", title: "Add with translation", contexts: ["selection", "page"] },
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

        //the URL that will be added to based on the selection
        let baseURL = "http://en.wikipedia.org/wiki/";
        const newURL = baseURL + info.selectionText;
        //create the new URL in the user's browser
        chrome.tabs.create({ url: newURL });
    })

});


