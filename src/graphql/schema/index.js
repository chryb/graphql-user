import { makeExecutableSchema }   from 'graphql-tools'
import { mergeTypes }             from 'merge-graphql-schemas'

// RESOLVERS
import resolvers from './resolvers'

// TYPES
// TODO: read types dir
// maybe with require ['mutation', 'query', 'user', 'query']
import mutation  from './types/mutation.graphql'
import entity    from './types/entity.graphql'
import user      from './types/user.graphql'
import query     from './types/query.graphql'

const typeDefs = mergeTypes([entity, user, query, mutation])

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

export default schema
