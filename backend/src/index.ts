import { Hono } from 'hono'
import { prisma } from "../lib/prisma.js";
import { withAccelerate } from '@prisma/extension-accelerate'

const app = new Hono()

app.post('/api/v1/signup', async (c) => {
    //@ts-ignore
    const dbUrl = c.env.DATABASE_URL;
    const body = await c.req.json();
    await prisma.user.create({
        data:{
            email: body.email,
            password: body.password,
        }
    })

    return c.text("Hello Hono")

})
app.post('/api/v1/signin', (c) => {

    return c.text("Hello Hono")
})
app.post('/api/v1/blog', (c) => {

    return c.text("Hello Hono")
})
app.put('/api/v1/blog', (c) => {

    return c.text("Hello Hono")
})
app.get('/api/v1/blog/:id', (c) => {
    return c.text("Hello Hono")

})


export default app
