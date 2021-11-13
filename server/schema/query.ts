import { queryType, nonNull, stringArg } from 'nexus'

// TODO: Dummy data, will be removed soon
import boards from '~/server/data/boards.json'

export const Query = queryType({
  definition(t) {
    t.field('board', {
      type: 'Board',
      args: {
        id: nonNull(stringArg()),
      },
      resolve(_, args) {
        return boards.find((item) => item.id === args.id) || null
      },
    })

    t.list.field('boards', {
      type: 'Board',
      resolve() {
        return boards
      },
    })
  },
})
