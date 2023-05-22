## run server (dev)
- npm run dev


## prisma terminal commands 
- npx prisma init
    - generates prisma folder with schema.prisma
    - generates .env 
- npx prisma db push
    - set up initial versions of your schema (can alter later)
    - temporary, doesn't generate migrations
    - can also be used to update schema  
- npx prisma studio
    - gives us a GUI to look at models
- npx prisma generate
    - generates client 

    
## notes 
- prisma is an ORM, tells db what schema should look like 
- schema.prisma
    - prisma client specifies what language you're working with 
    - provider could be postgres, mysql, mongodb, etc. 
    - automatically reads .env file 
- "watch" modes can automatically transpile code from TS to JS
- package.json scripts: 
    - a script called "preXYZ" will automatically run before a script called "XYZ" 
    - run dev script: "npm run dev"
- with "concurrently" package, syntax changes a bit, but it can run outside of unix (Mac is a unix OS)
- dev scripts for unix: 
    - "build": "rimraf dist && npx tsc",
    - "predev": "npm run build",
    - "dev": "npx tsc -w & nodemon dist/index.js"


## questions 
1. How to do migrations 
    - shadow migrations don't work, apparently because of permissions with elephantsql
    - "npx prisma migrate deploy" doesn't work, because "The database schema is not empty."


## citations 
1. Rettson, "Create A Node JS API Using Prisma, Express and TypeScript" [link](https://www.youtube.com/watch?v=AhP9I8_l-H0)
2. Prisma, "How to Use Cascading Deletes" [link](https://www.youtube.com/watch?v=-Nv3wSm0Ac0)
3. Stack Overflow, "Typescript ReferenceError: exports is not defined" [link](https://stackoverflow.com/questions/43042889/typescript-referenceerror-exports-is-not-defined)
4. Stack Overflow, "Instantiate prisma only once" [link](https://stackoverflow.com/questions/66919878/instantiate-prisma-only-once)
5. Borislav Hadzhiev, "req.body is undefined in Express.js & Node issue [Solved]"[link](https://bobbyhadz.com/blog/express-js-req-body-is-undefined)