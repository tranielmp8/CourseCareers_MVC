import prisma from './prisma.js';

await prisma.user.deleteMany();

await prisma.user.createMany({
  data: [
    {email: 'kakashi@gmai.com', username: 'kakashi'},
    {email: 'sasuke@gmai.com', username: 'sasuke'},
    {email: 'itatchi@gmai.com', username: 'itatchi'},
  ]
});

const user = await prisma.user.findFirst();

await prisma.post.createMany({
  data: [
    {title: '1st post title', body: 'first post body', userId: user?.id!},
    {title: '2nd post title', body: 'second post body', userId: user?.id!}
  ]
})