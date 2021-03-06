import { objectType, queryField, list, arg, nonNull } from 'nexus'

export const Board = objectType({
  name: 'Board',
  definition(t) {
    t.nonNull.id('id')
    t.nonNull.string('name')
    t.field('lists', {
      type: list('List'),
      resolve(board, _, ctx) {
        return ctx.db.list.findMany({
          where: {
            board_id: board.id,
          },
        })
      },
    })
  },
})

export const QueryBoardField = queryField('board', {
  type: 'Board',
  args: {
    id: arg({
      type: nonNull('String'),
    }),
  },
  resolve(_, args, ctx) {
    return ctx.db.board.findUnique({
      where: {
        id: args.id,
      },
    })
  },
})

export const QueryBoardCollectionField = queryField('boards', {
  type: list('Board'),
  args: {
    ids: arg({
      type: list(nonNull('String')),
    }),
  },
  resolve(_, args, ctx) {
    return ctx.db.board.findMany({
      where: {
        id: {
          in: args.ids || undefined,
        },
      },
    })
  },
})
