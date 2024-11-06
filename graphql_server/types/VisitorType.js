const { GraphQLObjectType, GraphQLNonNull, GraphQLInt, GraphQLString, GraphQLList, GraphQLID} = require('graphql');
const GenericService = require("../../service/GenericService");
const {Visitor, Visitor_Event, Event} = require("../../models");

const VisitorType = new GraphQLObjectType({
    name: "Visitor",
    description: "Visitor of some event",
    fields: ()=>({
        _id: {type: GraphQLNonNull(GraphQLID)},
        name: {type: GraphQLNonNull(GraphQLString)},
        age: {type: GraphQLNonNull(GraphQLInt)},
        events: {
            type: GraphQLList(require("./EventType")),
            resolve: async (visitor)=>{
                const allEvents = await new GenericService(Event).getAll()
                const allVisitorEventPairs = await new GenericService(Visitor_Event).getAll()
                const allVisitorEvents = allVisitorEventPairs.filter(pair => pair.visitor_id.equals(visitor._id))
                const eventIds = allVisitorEvents.map(pair => pair.event_id.toString())
                return allEvents.filter(event => eventIds.includes(event._id.toString()))
            }
        }
    })
})

module.exports = VisitorType