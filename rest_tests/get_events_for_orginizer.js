const org_id="672a5a3df0bc3c3600ad3fda"


fetch('http://localhost:8080/events').then(response => response.json()).then(events => {
    let filtered = events.filter(e=>e.organizer_id==org_id)
    console.log(filtered)
}).catch(error => console.error('Error while getting data:', error));