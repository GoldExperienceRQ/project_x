const {GraphQLObjectType, GraphQLList, GraphQLNonNull, GraphQLString, GraphQLInt, GraphQLID} = require("graphql");
const {VisitorType, EventType, OrganizerType, Visitor_EventType} = require("./types");
const GenericService = require("../service/GenericService")
const {Visitor, Organizer, Event, Visitor_Event} = require("../models")


const RootMutationsType = new GraphQLObjectType({
    name: "Mutation",
    description: "Root mutation",

    fields: {

        // Creating
        addVisitor: {
            type: VisitorType,
            description: "Adds a new entry of a visitor to a db",
            args: {
                name: {type: GraphQLNonNull(GraphQLString)},
                age: {type: GraphQLNonNull(GraphQLInt)}
            },
            resolve: (parent, args) => {
                return new GenericService(Visitor).add(args)
            }
        },
        addOrganizer: {
            type: OrganizerType,
            description: "Adds a new entry of an organizer to a db",
            args: {
                name: {type: GraphQLNonNull(GraphQLString)},
            },
            resolve: (parent, args) => {
                return new GenericService(Organizer).add(args)
            }
        },
        addEvent: {
            type: EventType,
            description: "Adds a new entry of an event to a db",
            args: {
                name: {type: GraphQLNonNull(GraphQLString)},
                date: {type: GraphQLNonNull(GraphQLString)},
                location: {type: GraphQLNonNull(GraphQLString)},
                organizer_id: {type: GraphQLNonNull(GraphQLID)},
            },
            resolve: (parent, args) => {
                return new GenericService(Event).add(args)
            }
        },
        addVisitor_Event: {
            type: Visitor_EventType,
            description: "Adds a new entry of a visitor_event to a db",
            args: {
                visitor_id: {type: GraphQLNonNull(GraphQLID)},
                event_id: {type: GraphQLNonNull(GraphQLID)}
            },
            resolve: (parent, args) => {
                return new GenericService(Visitor_Event).add(args)
            }
        },
        // Patching
        patchVisitor: {
            type: VisitorType,
            description: "Patches an entry of a visitor in a db",
            args: {
                _id: {type: GraphQLNonNull(GraphQLID)},
                name: {type: GraphQLString},
                age: {type: GraphQLInt}
            },
            resolve: (parent, args) => {
                return new GenericService(Visitor).patchEntry(args._id, args)
            }
        },
        patchOrganizer: {
            type: OrganizerType,
            description: "Patches an entry of an organizer in a db",
            args: {
                _id: {type: GraphQLNonNull(GraphQLID)},
                name: {type: GraphQLString},
            },
            resolve: (parent, args) => {
                return new GenericService(Organizer).patchEntry(args._id, args)
            }
        },
        patchEvent: {
            type: EventType,
            description: "Patches an entry of an event in a db",
            args: {
                _id: {type: GraphQLNonNull(GraphQLID)},
                name: {type: GraphQLString},
                date: {type: GraphQLString},
                location: {type: GraphQLString},
                organizer_id: {type: GraphQLID},
            },
            resolve: (parent, args) => {
                return new GenericService(Event).patchEntry(args._id, args)
            }
        },

        //Deleting
        deleteEvent: {
            type: EventType,
            description: "Deletes an entry of an event from a db",
            args: {
                _id: {type: GraphQLNonNull(GraphQLID)},
            },
            resolve: (parent, args) => {
                return new GenericService(Event).deleteById(args._id)
            }
        },
        deleteOrganizer: {
            type: OrganizerType,
            description: "Deletes an entry of an organizer from a db",
            args: {
                _id: {type: GraphQLNonNull(GraphQLID)},
            },
            resolve: (parent, args) => {
                return new GenericService(Organizer).deleteById(args._id)
            }
        },
        deleteVisitor: {
            type: VisitorType,
            description: "Deletes an entry of a visitor from a db",
            args: {
                _id: {type: GraphQLNonNull(GraphQLID)},
            },
            resolve: (parent, args) => {
                return new GenericService(Visitor).deleteById(args._id)
            }
        },
        deleteVisitor_Event: {
            type: Visitor_EventType,
            description: "Deletes an entry of a visitor_event from a db",
            args: {
                _id: {type: GraphQLNonNull(GraphQLID)},
            },
            resolve: (parent, args) => {
                return new GenericService(Visitor_Event).deleteById(args._id)
            }
        },
    }
})

module.exports = RootMutationsType