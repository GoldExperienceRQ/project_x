const vis_id="672a29543e7c92689ffbd468"


fetch('http://localhost:8080/visitors_events').then(response => response.json()).then(async v_e => {
    let filtered = v_e.filter(e=>e.visitor_id==vis_id)
    if(filtered!=[])
    {
        var all_events=await fetch('http://localhost:8080/events').then(response => response.json()).then(events => {
            return events;

        }).catch(error => console.error('Error while getting data:', error));
        var res=[];
        for(let e_id of filtered)
        {
                for(let e2 of all_events){
                    if(!(e2 in res) && e2._id===e_id.event_id)
                    {
                        res.push(e2)
                    }
                }
        }

        console.log(res);

    }

}).catch(error => console.error('Error while getting data:', error));