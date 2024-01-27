chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: removeVisaRequiredDivs
  });
});

function removeVisaRequiredDivs() {
  document
    .querySelectorAll('div.bg-beige-lighter.mb-5.rounded.pb-4')
    .forEach((div) => {
      if (
        Array.from(div.querySelectorAll('span')).some((span) =>
          span.textContent.includes('Visa Required')
        )
      ) {
        div.remove();
      }
    });
}
