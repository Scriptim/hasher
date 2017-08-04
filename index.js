const submit = document.getElementById('submit')
const main = document.getElementsByTagName('main')[0];

const handler = function () {
  var string = encodeURIComponent(document.getElementById('string').value)
  //var salt = encodeURIComponent(document.getElementById('salt').value)
  //var key = encodeURIComponent(document.getElementById('key').value)

  var request = new XMLHttpRequest()
  request.onload = function () {
    if (this.status !== 200) {
      alert('An error occured')
      return
    }
    main.innerHTML = this.responseText
  };
  //request.open('GET', 'hash.php?str=' + string + '&salt=' + salt + '&key=' + key)
  request.open('GET', 'hash.php?str=' + string)
  request.send()
}

if (submit.addEventListener) {
  submit.addEventListener('click', handler, false)
} else {
  submit.attachEvent('onclick', handler)
}
