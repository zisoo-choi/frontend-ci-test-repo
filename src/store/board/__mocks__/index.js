import Vue from "vue"
import Vuex from "vuex"
import axiosInst from "@/utility/axiosObject";

Vue.use(Vuex)

export const getters = {
    getBoards: jest.fn().mockReturnValue([
        {
            boardId: 1,
            title: 'go',
            content: 'go',
            writer: 'go',
            regDate: new Date('2023-04-01'),
        },
        {
            boardId: 2,
            title: 'go',
            content: 'go',
            writer: 'go',
            regDate: new Date('2023-04-01'),
        },
        {
            boardId: 3,
            title: 'go',
            content: 'go',
            writer: 'go',
            regDate: new Date('2023-04-01'),
        },
    ]),

    getBoard: jest.fn().mockReturnValue([
        {
            boardId: 1,
            title: 'go',
            content: 'go',
            writer: 'go',
            regDate: new Date('2023-04-01'),
        },
    ]),
}

export const mutations = {
    fetch: jest.fn(),
}

export const actions = {
    // eslint-disable-next-line no-empty-pattern
    requestCreateBoardToSpring: jest.fn((payload) => {
        const { title, content, writer } = payload

        let board = new Object()
        board.id = 1
        board.title = "go"
        board.writer = "go"
        board.regDate = new Date('2023-04-01')

        return board
    }),
    // eslint-disable-next-line no-empty-pattern
    requestBoardListToSpring: jest.fn (() => {
        return getters.getBoards()
    }),
    // eslint-disable-next-line no-empty-pattern
    requestBoardToSpring: jest.fn ((payload) => {
        const { boardId } = payload

        return getters.getBoard();
    }),
    // eslint-disable-next-line no-empty-pattern
    requestDeleteBoardToSpring: jest.fn ((payload) => {
        const { boardId } = payload

        console.log('boardId: ' + JSON.stringify(boardId))

        let board = getters.getBoard()

        console.log('board: ' + JSON.stringify(board))
        if (board[0].boardId == boardId) {
            return true
        }

        return false
    }),
    // eslint-disable-next-line no-empty-pattern
    requestBoardModifyToSpring: jest.fn ((payload) => {
        const { title, content, boardId } = payload

        let board = getters.getBoard()

        if (board[0].boardId === boardId) {
            board[0].title = title
            board[0].content = content
        }

        return board;
    })
}

export const state = {
    boards: [
        {
            boardId: 1,
            title: 'go',
            content: 'go',
            writer: 'go',
            regDate: new Date(),
        },
        {
            boardId: 2,
            title: 'go',
            content: 'go',
            writer: 'go',
            regDate: new Date(),
        },
        {
            boardId: 3,
            title: 'go',
            content: 'go',
            writer: 'go',
            regDate: new Date(),
        },
    ],

    board: {
        boardId: 1,
        title: 'go',
        content: 'go',
        writer: 'go',
        regDate: new Date(),
    },
}

export function __createMocks(custom = { getters: {}, mutations: {}, actions: {}, state: {}}) {
    const mockGetters = Object.assign({}, getters, custom.getters)
    const mockMutations = Object.assign({}, mutations, custom.mutations)
    const mockActions = Object.assign({}, actions, custom.actions)
    const mockState = Object.assign({}, state, custom.state)

    return {
        getters: mockGetters,
        mutations: mockMutations,
        actions: mockActions,
        state: mockState,
        store: new Vuex.Store({
            getters: mockGetters,
            mutations: mockMutations,
            actions: mockActions,
            state: mockState,
        }),
    }
}

export const store = __createMocks().store;