document.getElementById('alertButton').addEventListener('click', function() {
    var alertPlaceholder = document.getElementById('alertPlaceholder');
    var alertHTML = `
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        Alert, someone pushed the button
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;
    alertPlaceholder.innerHTML = alertHTML;
  });
  