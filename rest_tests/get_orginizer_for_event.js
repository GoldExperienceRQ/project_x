const ev_id="672a5a56f0bc3c3600ad3fdc"


fetch('http://localhost:8080/events').then(response => response.json()).then(events => {
    let filtered = events.filter(e=>e._id==ev_id)
    if(filtered!=[])
    {
        let org_id=filtered[0].organizer_id;
        fetch('http://localhost:8080/organizers').then(response => response.json()).then(org => {
            let filtered2 = org.filter(o=>o._id==org_id)
            console.log(filtered2)
        }).catch(error => console.error('Error while getting data:', error));
    }

}).catch(error => console.error('Error while getting data:', error));