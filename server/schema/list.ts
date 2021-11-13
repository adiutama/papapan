import { objectType } from 'nexus'

// TODO: Dummy data, will be removed soon
import boards from '~/server/data/boards.json'
import tasks from '~/server/data/tasks.json'

export const List = objectType({
  name: 'List',
  definition(t) {
    t.id('id')
    t.string('name')
    t.string('board_id')
    t.field('board', {
      type: 'Board',
      resolve(list) {
        return boards.find((board) => board.id === list.board_id) || null
      },
    })
    t.list.field('tasks', {
      type: 'Task',
      resolve(list) {
        return tasks.filter((task) => list.id === task.list_id)
      },
    })
  },
})
