// Allows users to open the side panel by clicking on the action toolbar icon
chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));

chrome.sidePanel.setOptions({
    path: 'sidepanel.html',
    enabled: true
});

