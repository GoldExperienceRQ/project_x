const { GraphQLObjectType, GraphQLNonNull, GraphQLInt, GraphQLString, GraphQLList, GraphQLID} = require('graphql');
const VisitorType = require("./VisitorType");
const GenericService = require("../../service/GenericService");
const {Visitor, Event} = require("../../models");
const EventType = require("./EventType");


const Visitor_EventType = new GraphQLObjectType({
    name: "Visitor_event",
    description: "List of visitor-event pairs",
    fields: ()=>({
        _id: {type: GraphQLNonNull(GraphQLID)},
        visitor_id: {type: GraphQLNonNull(GraphQLID)},
        event_id: {type: GraphQLNonNull(GraphQLID)},
        visitor: {
            type: VisitorType,
            resolve: (visitor_event) => new GenericService(Visitor).getById(visitor_event.visitor_id)
        },
        event: {
            type: EventType,
            resolve: (visitor_event) => new GenericService(Event).getById(visitor_event.event_id)
        }
    })
})

module.exports = Visitor_EventType