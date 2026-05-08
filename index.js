function viewOn() {
    let img = document.getElementById('myImage');
    let button = document.getElementById('button');
      if (img.style.display === 'none') {
        img.style.display = 'block';
        button.textContent = 'Hide';
    } else {
        img.style.display = 'none';
        button.textContent = 'View';
    	}
}
