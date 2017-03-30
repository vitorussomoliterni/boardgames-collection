// This file mocks a web API with hard coded data

const boardgames = [
    {
        id: "twilight-struggle",
        title: "Twilight Struggle",
        numberOfPlayers: "2",
        score: 5
    },
    {
        id: "terra-mystica",
        title: "Terra Mystica",
        numberOfPlayers: "2-5",
        score: 5
    },
    {
        id: "star-realms",
        title: "Star Realms",
        numberOfPlayers: "2",
        score: 4
    },
];

const generateId = (boardgame) => {
    return boardgame.title.toLowerCase().replace(" ", "-");
};

class BoardgameApi {
    static getAllBoardgames() {
        return new Promise((resolve, reject) => {
            setTimeout (() => {
                resolve(Object.assi ([], boardgames));
            }, 0);
        });
    }

    static saveBoardgame(boardgame) {
        boardgame = Object.assign({}, boardgame); // to avoid manipulating the object passed in.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const minBoardgameTitleLength = 3;
                if (boardgame.title.length < minBoardgameTitleLength) {
                    reject(`Title must be at least ${minBoardgameTitleLength} characters.`);
                }

                if (boardgame.title) {
                    const existingBoardgameId = boardgames.findIndex(b => b.id === boardgame.id);
                    boardgames.splice(existingBoardgameId, 1, boardgame);
                } else {
                    boardgame.id = generateId(boardgame);
                    boardgames.push(boardgame);
                }

                resolve(boardgame);
            }, 0);
        });
    }

    static deleteBoardgame(boardgameId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexOfBoardgameToDelete = boardgames.findIndex(boardgame => {
                    boardgame.id === boardgameId;
                });
                boardgames.splice(indexOfBoardgameToDelete, 1);
                resolve();
            }, 0);
        });
    }
}

export default BoardgameApi;