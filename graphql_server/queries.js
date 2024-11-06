const {GraphQLObjectType, GraphQLList, GraphQLNonNull, GraphQLID} = require("graphql");
const {VisitorType, EventType, OrganizerType, Visitor_EventType} = require("./types");
const GenericService = require("../service/GenericService")
const {Visitor, Organizer, Event, Visitor_Event} = require("../models")

const RootQueryType = new GraphQLObjectType({
    name: "Query",
    description: "Root query",
    fields: {
        visitors: {
            type: GraphQLList(VisitorType),
            description: "List of all visitors",
            resolve: () => new GenericService(Visitor).getAll()
        },
        events: {
            type: GraphQLList(EventType),
            description: "List of all events",
            resolve: () => new GenericService(Event).getAll()
        },
        organizers: {
            type: GraphQLList(OrganizerType),
            description: "List of all organizers",
            resolve: () => new GenericService(Organizer).getAll()
        },
        visitors_events: {
            type: GraphQLList(Visitor_EventType),
            description: "List of all visitor_event pairs",
            resolve: () => new GenericService(Visitor_Event).getAll()
        },
        visitor: {
            type: VisitorType,
            description: "Returns a visitor by id",
            args: {
                _id: {type: GraphQLNonNull(GraphQLID)}
            },
            resolve: (parent, args) => new GenericService(Visitor).getById(args._id)
        },
        organizer: {
            type: OrganizerType,
            description: "Returns an organizer by id",
            args: {
                _id: {type: GraphQLNonNull(GraphQLID)}
            },
            resolve: (parent, args) => new GenericService(Organizer).getById(args._id)
        },
        event: {
            type: EventType,
            description: "Returns an event by id",
            args: {
              _id: {type: GraphQLNonNull(GraphQLID)}
            },
            resolve: (parent, args) => new GenericService(Event).getById(args._id)
        },
        visitor_event: {
            type: Visitor_EventType,
            description: "Returns a visitor_event pair by id",
            args: {
                _id: {type: GraphQLNonNull(GraphQLID)}
            },
            resolve: (parent, args) => new GenericService(Visitor_Event).getById(args._id)
        }

    }
})

module.exports = RootQueryType