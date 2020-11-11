const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('.tab');
const tabPanels = tabs.querySelectorAll('.tabpanel');

function tabClick(event) {
  tabPanels.forEach(function(panel) {
    panel.hidden = true;
  });
  const {id} = event.currentTarget;
  const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
  tabPanel.hidden = false;
}
tabButtons.forEach(
 function (button) {
   button.addEventListener('click', tabClick)
});