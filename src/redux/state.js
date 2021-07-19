let state={
    profilePage:[{
        posts: [
            {uniquePostId: 1, postMessage: "Hello, new post", likesCounter: 1},
            {uniquePostId: 2, postMessage: "Post 2", likesCounter: 1},
            {uniquePostId: 3, postMessage: "Post 3", likesCounter: 1},
            {uniquePostId: 4, postMessage: "Post 4", likesCounter: 1},
            {uniquePostId: 5, postMessage: "Post 5", likesCounter: 1}
        ]
    }],
    chatsPage: {
        chats: [{uniqueUserId: 1, name: "Vasylyna"},
            {uniqueUserId: 2, name: "Igor"},
            {uniqueUserId: 3, name: "Yulik"},
            {uniqueUserId: 4, name: "Volodia"},
            {uniqueUserId: 5, name: "Nazar"},
            {uniqueUserId: 6, name: "Yarik"}
        ],
        headers: [
            {nickName: "VasylynaKorniy"},
            {nickName: "IgorChychman"},
            {nickName: "YulikTstvetkov"},
            {nickName: "VolodiaMladonov"},
            {nickName: "NazarHnatyshun"},
            {nickName: "YarikKryt"}
        ],
        messages: [
            {uniqueMessageId: 1, textMessage: "Hello my dear friends."},
            {uniqueMessageId: 2, textMessage: "Hello how are you?"},
            {uniqueMessageId: 3, textMessage: "Ok"},
            {uniqueMessageId: 4, textMessage: "Nice."},
            {uniqueMessageId: 5, textMessage: "Maybe"},
            {uniqueMessageId: 6, textMessage: "All right"}
        ],

    }
}

export default state;