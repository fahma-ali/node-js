const posts = [
    {
        id: 1,
        post: "post 1"
    },
    {
        id: 2,
        post: "post 2"
    }
];


export const getPosts = (req, res) => {
    res.json(posts)
}
