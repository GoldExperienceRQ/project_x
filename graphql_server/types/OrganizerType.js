const { GraphQLObjectType, GraphQLNonNull, GraphQLInt, GraphQLString, GraphQLList, GraphQLID} = require('graphql');
const GenericService = require("../../service/GenericService")
const {Organizer, Visitor, Visitor_Event, Event} = require("../../models");


const OrganizerType = new GraphQLObjectType({
    name: "Organizer",
    description: "Organizer of some event",
    fields: ()=>({
        _id: {type: GraphQLNonNull(GraphQLID)},
        name: {type: GraphQLNonNull(GraphQLString)},
        events: {
            type: GraphQLList(require("./EventType")),
            resolve: async (organizer) => {
                const events = await new GenericService(Event).getAll()
                return events.filter(event => event.organizer_id.equals(organizer._id))
            }
        }
    })
})

module.exports = OrganizerType