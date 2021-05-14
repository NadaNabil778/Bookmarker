var sites = []
if (localStorage.getItem('Data') == null) {
    var sites = []
}
else {
    sites = JSON.parse(localStorage.getItem('Data'))
    display()
}
var SiteName = document.getElementById('SiteName')
var SiteURL = document.getElementById('SiteURL')
function getData() {
    site = {
        SiteName: SiteName.value,
        SiteURL: SiteURL.value,
    }
    sites.push(site)
    display()
    clear()
    localStorage.setItem('Data', JSON.stringify(sites))


}

function display() {
    var copaya = ``
    for (i = 0; i < sites.length; i++) {
        copaya += `
        <div class="data d-flex flex-row my-3">
        <h3 class="w-50 ml-5">${sites[i].SiteName}</h3>
        <button  onclick="Delete(${i})" class="btn btn-danger ml-5">Delete</button>
        <a class="btn btn-info ml-5" href="${sites[i].SiteURL}">Visit</a>
    </div>
      `
    }
    document.getElementById('demo').innerHTML = copaya
}
function Delete(index) {
    sites.splice(index, 1)
    localStorage.setItem('Data', JSON.stringify(sites))

    display()
}
function clear() {
    SiteName.value = ''
    SiteURL.value = ''
}