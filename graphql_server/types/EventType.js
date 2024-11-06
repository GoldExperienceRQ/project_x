const { GraphQLObjectType, GraphQLNonNull, GraphQLInt, GraphQLString, GraphQLList, GraphQLID} = require('graphql');
const GenericService = require("../../service/GenericService")
const {Organizer, Visitor, Visitor_Event} = require("../../models");


const EventType = new GraphQLObjectType({
    name: "Event",
    description: "Some event",
    fields: ()=>({
        _id: {type: GraphQLNonNull(GraphQLID)},
        name: {type: GraphQLNonNull(GraphQLString)},
        date: {type: GraphQLNonNull(GraphQLString)},
        location: {type: GraphQLNonNull(GraphQLString)},
        organizer_id: {type: GraphQLNonNull(GraphQLID)},
        organizer: {
            type: require("./OrganizerType"),
            resolve: (event)=>{
                return new GenericService(Organizer).getById(event.organizer_id)
            }
        },
        visitors: {
            type: GraphQLList(require("./VisitorType")),
            resolve: async (event)=>{
                const allVisitors = await new GenericService(Visitor).getAll()
                const allVisitorEventPairs = await new GenericService(Visitor_Event).getAll()
                const allEventVisitors = allVisitorEventPairs.filter(pair => pair.event_id.equals(event._id))
                const visitorsIds = allEventVisitors.map(pair => pair.visitor_id.toString())
                return allVisitors.filter(visitor => visitorsIds.includes(visitor._id.toString()))
            }
        }
    })
})

module.exports = EventType