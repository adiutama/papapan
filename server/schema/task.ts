import { objectType } from 'nexus'

export const Task = objectType({
  name: 'Task',
  definition(t) {
    t.id('id')
    t.string('name')
    t.string('list_id')
  },
})
