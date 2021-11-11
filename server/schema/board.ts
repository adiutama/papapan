import { objectType } from 'nexus'

// TODO: Dummy data, will be removed soon
import lists from '../data/lists.json'

export const Board = objectType({
  name: 'Board',
  definition(t) {
    t.id('id')
    t.string('name')
    t.list.field('lists', {
      type: 'List',
      resolve(board) {
        return lists.filter((list) => list.board_id === board.id)
      },
    })
  },
})
