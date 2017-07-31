const submit = document.getElementById('submit')

const handler = function() {
  var string = document.getElementById('string').value
  var salt = document.getElementById('salt').value
  var key = document.getElementById('key').value

  // TODO: algorithm
}

if (submit.addEventListener) {
  submit.addEventListener("click", handler, false)
} else {
  submit.attachEvent('onclick', handler)
}
