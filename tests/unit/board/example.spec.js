import { shallowMount } from '@vue/test-utils'
import JpaBoardList from '@/components/board/JpaBoardList'
import JpaBoardRead from '@/components/board/JpaBoardRead'
import JpaBoardRegisterPage from '@/views/board/JpaBoardRegisterPage'

import { __createMocks as createBoardStoreMocks } from '@/store/board/__mocks__'
import Vuetify from 'vuetify'

jest.mock('@/store/board/BoardModule')

const vuetify = new Vuetify()

describe('JpaBoardList', () => {
  it('renders props.msg when passed', () => {
    let board = new Array()
    board.id = 1
    board.title = "go"
    board.writer = "go"
    board.regDate = new Date()

    const wrapper = shallowMount(JpaBoardList, {
      propsData: { boards: board }
    })
    expect(wrapper.props().boards).toBe(board)
  })
})

describe('JpaBoardRead', () => {
  it('renders props.msg when passed', () => {
    let board = new Object()
    board.id = 1
    board.title = "go"
    board.writer = "go"
    board.regDate = new Date()

    const wrapper = shallowMount(JpaBoardRead, {
      propsData: { board: board }
    })
    expect(wrapper.props().board).toBe(board)
  })
})

describe('requestCreateBoardToSpring', () => {
  test('boardRegister actions test', async () => {
    const storeMocks = createBoardStoreMocks()

    const title = "go"
    const content = "go"
    const writer = "go"

    let board = new Object()
    board.id = 1
    board.title = "go"
    board.writer = "go"
    board.regDate = new Date('2023-04-01')

    await expect(storeMocks.actions.requestCreateBoardToSpring({ title, content, writer })).toStrictEqual(board)
  })
})

describe('requestBoardListToSpring', () => {
  test('boardList actions test', async () => {
    const storeMocks= createBoardStoreMocks()

    await expect(storeMocks.actions.requestBoardListToSpring().length).toStrictEqual(3)
  })
})

describe('requestBoardToSpring', () => {
  test('boardRead actions test', async () => {
    const storeMocks= createBoardStoreMocks()
    const boardId = 1;

    let board = new Object()
    board.boardId = 1
    board.title = 'go'
    board.content = 'go'
    board.writer = "go"
    board.regDate = new Date('2023-04-01')

    await expect(storeMocks.actions.requestBoardToSpring({ boardId })).toStrictEqual([board])
  })
})

describe('requestDeleteBoardToSpring', () => {
  test('boardDelete actions test', async () => {
    const storeMocks= createBoardStoreMocks()
    const boardId = 1;

    await expect(storeMocks.actions.requestDeleteBoardToSpring({ boardId })).toStrictEqual(true)
  })
})

describe('requestBoardModifyToSpring', () => {
  test('boardModify actions test', async () => {
    const storeMocks= createBoardStoreMocks()
    const boardId = 1;
    const title = 'change'
    const content = 'change'

    let board = new Object()
    board.boardId = 1
    board.title = 'change'
    board.content = 'change'
    board.writer = "go"
    board.regDate = new Date('2023-04-01')

    await expect(storeMocks.actions.requestBoardModifyToSpring({ title, content, boardId })).toStrictEqual([board])
  })
})
