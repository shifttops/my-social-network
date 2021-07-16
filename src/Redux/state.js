let state = {
    profilePage: {
        userInfo: {
            userName: 'Kupreeva Daria',
            avatarUrl:  'https://sun9-62.userapi.com/impg/c857532/v857532088/1694a8/lNulhqu_wkg.jpg' +
                '?size=646x1080&quality=96&sign=051246fe03e9100992627a57b09849c1&type=album',
            birthDate: '01 May 2004',
            city: 'Minsk',
            edu: 'BSU',
        },
        postsData: [
            {
                text: 'I love Nick VERYY MUCH',
                date: '13 July 2021'
            },
            {
                text: 'Nick loves me moree',
                date: '13 July 2021'
            },
            {
                text: 'I married Nick today',
                date: '15 July 2021'
            },
            {
                text: 'Nick отлизал мне очень хорошо today)',
                date: '15 July 2021'
            }
        ],
    },
    messagesPage: {
        dialogsData: [
            {
                id: 1,
                name: "Nick",
                surname: "Kupreev",
                photoUrl: 'https://sun9-9.userapi.com/impg/UG8VExZpPRlb6YGYJEKAeyP-rkLkLhx_U6dsdw/zwWIQ9UZ118.jpg?size=960x1280&quality=96&sign=b4742913b9a925638ad8ebaac472a4e5&type=album',
                messages: [
                    'I love you',
                    'You are the best one'
                ]
            },
            {
                id: 2,
                name: "Denis",
                surname: "Baikhanov",
                photoUrl: 'https://sun9-27.userapi.com/impf/c837134/v837134870/2541e/lZAF8Vr9OhQ.jpg?size=720x599&quality=96&sign=7ef1de645bff24c67f90925a2194828d&type=album',
                messages: [
                    'I`m going home, sis',
                ]
            },
            {
                id: 3,
                name: 'Anna',
                surname: 'Baikhanova',
                messages: [
                    'How are you, baby?',
                ]
            },
        ],
    },
}

export default state;