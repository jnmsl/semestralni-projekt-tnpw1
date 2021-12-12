document.querySelector('a#copy-url').addEventListener('click', () => {
  let i = document.body.appendChild(document.createElement('input'));
  i.value = window.location.href;
  i.select();
  document.execCommand('copy');
  i.parentNode.removeChild(i);
});
