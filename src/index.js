const button = document.createElement('button');
button.innerText = 'Click me';
button.onclick = () => {
  System.import('./image_viewer')
  .then(module => {
    module.default();
  }) //Reaches out to the server
}

document.body.appendChild(button);