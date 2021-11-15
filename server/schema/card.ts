import { objectType, queryField, list, arg, nonNull } from 'nexus'

export const Card = objectType({
  name: 'Card',
  definition(t) {
    t.nonNull.id('id')
    t.nonNull.string('name')
    t.nonNull.string('board_id')
    t.nonNull.string('list_id')
    t.field('board', {
      type: 'Board',
      resolve(card, _, ctx) {
        return ctx.db.board.findUnique({
          where: {
            id: card.board_id,
          },
        })
      },
    })
  },
})

export const QueryCardField = queryField('card', {
  type: 'Card',
  args: {
    id: arg({
      type: nonNull('String'),
    }),
  },
  resolve(_, args, ctx) {
    return ctx.db.card.findUnique({
      where: {
        id: args.id,
      },
    })
  },
})

export const QueryCardCollectionField = queryField('cards', {
  type: list('Card'),
  args: {
    ids: arg({
      type: list(nonNull('String')),
    }),
  },
  resolve(_, args, ctx) {
    return ctx.db.card.findMany({
      where: {
        id: {
          in: args.ids || undefined,
        },
      },
    })
  },
})
