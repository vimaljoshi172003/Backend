import express from 'express'

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send("This is Vimal")
})
app.get('/api/Website', (req, res) => {
    const WebsiteData = [
        {
            id: 1,
            Name: "Tshirt",
            img: "https://veirdo.in/cdn/shop/files/b_0119493a-9927-4550-8323-baefe5f625c0.jpg?v=1716202861"
        },
        {
            id: 2,
            Name: "shirt",
            img: "https://www.beyours.in/cdn/shop/products/light-blue-classic-shirt-5.jpg?v=1720885321&width=1200"
        },
        {
            id: 3,
            Name: "shirt",
            img: "https://www.beyours.in/cdn/shop/products/light-blue-classic-shirt-5.jpg?v=1720885321&width=1200"
        },
    ]
    res.send(WebsiteData)
})
app.listen(port, () => {
    console.log(`App is runing at http://localhost:${port}`)
})