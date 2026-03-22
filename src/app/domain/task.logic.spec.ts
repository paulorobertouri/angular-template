import { addTask, doneCount, removeTask, toggleTask } from './task.logic';

describe('task logic', () => {
  it('ignores blank task titles', () => {
    const result = addTask([], '   ');
    expect(result.length).toBe(0);
  });

  it('adds and toggles tasks', () => {
    spyOn(crypto, 'randomUUID').and.returnValue(
      '11111111-1111-1111-1111-111111111111',
    );

    const added = addTask([], 'Ship docs');
    const toggled = toggleTask(added, '11111111-1111-1111-1111-111111111111');

    expect(added[0]?.title).toBe('Ship docs');
    expect(doneCount(toggled)).toBe(1);
  });

  it('removes a task by id', () => {
    const result = removeTask(
      [
        { id: '1', title: 'one', done: false },
        { id: '2', title: 'two', done: true },
      ],
      '1',
    );

    expect(result).toEqual([{ id: '2', title: 'two', done: true }]);
  });
});
