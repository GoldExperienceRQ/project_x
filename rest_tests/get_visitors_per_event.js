const ev_id="672a5a56f0bc3c3600ad3fdc"


fetch('http://localhost:8080/visitors_events').then(response => response.json()).then(async v_e => {
    let filtered = v_e.filter(e=>e.event_id==ev_id)
    if(filtered!=[])
    {
        var all_visitors=await fetch('http://localhost:8080/visitors').then(response => response.json()).then(visitors => {
            return visitors;

        }).catch(error => console.error('Error while getting data:', error));
        var res=[];
        for(let e_id of filtered)
        {
                for(let v of all_visitors){
                    if(!(v in res) && v._id===e_id.visitor_id)
                    {
                        res.push(v)
                    }
                }
        }

        console.log(res);

    }

}).catch(error => console.error('Error while getting data:', error));