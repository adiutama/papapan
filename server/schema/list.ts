import { objectType, queryField, list, arg, nonNull } from 'nexus'

export const List = objectType({
  name: 'List',
  definition(t) {
    t.nonNull.id('id')
    t.nonNull.string('name')
    t.nonNull.string('board_id')
    t.field('board', {
      type: 'Board',
      resolve(list, _, ctx) {
        return ctx.db.board.findUnique({
          where: {
            id: list.board_id,
          },
        })
      },
    })
    t.list.field('cards', {
      type: 'Card',
      resolve(list, _, ctx) {
        return ctx.db.card.findMany({
          where: {
            list_id: list.id,
          },
        })
      },
    })
  },
})

export const QueryListField = queryField('list', {
  type: 'List',
  args: {
    id: arg({
      type: nonNull('String'),
    }),
  },
  resolve(_, args, ctx) {
    return ctx.db.list.findUnique({
      where: {
        id: args.id,
      },
    })
  },
})

export const QueryListCollectionField = queryField('lists', {
  type: list('List'),
  args: {
    ids: arg({
      type: list(nonNull('String')),
    }),
  },
  resolve(_, args, ctx) {
    return ctx.db.list.findMany({
      where: {
        id: {
          in: args.ids || undefined,
        },
      },
    })
  },
})
