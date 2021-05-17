const INITIAL_STATE = {
    categories: [
        {
            title: 'Switch',
            imageUrl: 'https://giffiles.alphacoders.com/158/15815.gif',
            id: 1,
            linkUrl: 'shop/switch'
        },
        {
            title: 'PS5/PS4',
            imageUrl: 'https://media1.tenor.com/images/c8859d5216478925519b48aae5962a38/tenor.gif?itemid=17487584',
            id: 2,
            linkUrl: 'shop/ps5ps4'
        },
        {
            title: 'Xbox',
            imageUrl: 'https://thumbs.gfycat.com/FondVigilantBuffalo-size_restricted.gif',
            id: 3,
            linkUrl: 'shop/xbox'
        },
        {
            title: 'Consoles',
            imageUrl: 'https://spy.com/wp-content/uploads/2020/10/best-gaming-console.png?w=958&h=599&crop=1',
            size: 'large',
            id: 4,
            linkUrl: 'shop/consoles'
        },
        {
            title: 'Games',
            imageUrl: 'https://wallpapercave.com/wp/wp3655680.jpg',
            size: 'large',
            id: 5,
            linkUrl: 'shop/games'
        }
    ]
};

const homeMenuReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default homeMenuReducer;