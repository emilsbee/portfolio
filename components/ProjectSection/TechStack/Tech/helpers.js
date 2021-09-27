export const getTypeData = (type) => {
    let typeData;

    const types = {
        React: {
            backgroundColor: "rgb(113, 187, 214)",
            link: "https://reactjs.org/",
            text: "React.js"
        },
        Firebase: {
            backgroundColor: "rgb(243, 169, 63)",
            link: "https://firebase.google.com/",
            text: "Firebase"
        },
        EasyPeasy: {
            backgroundColor: "rgb(143, 193, 97)",
            link: "https://easy-peasy.vercel.app/",
            text: "Easy-peasy"
        }, 
        Sass: {
            backgroundColor: "rgb(177, 74, 126)",
            link: "https://sass-lang.com/",
            text: "Sass"
        },
        ReactNative: {
            backgroundColor: "rgb(113, 187, 214)",
            link: "https://reactnative.dev/",
            text: "React Native"
        },
        Node: {
            backgroundColor: "#43853d",
            link: "https://nodejs.org/en/",
            text: "Node.js"
        },
        Express: {
            backgroundColor: "#555",
            link: "https://expressjs.com/",
            text: "Express.js"
        },
        TypeORM: {
            backgroundColor: "#E83524",
            link: "https://typeorm.io/#/",
            text: "TypeORM"
        },
        SQLite3: {
            backgroundColor: "#044a64",
            link: "https://www.sqlite.org/index.html",
            text: "SQLite3" 
        },
        Typescript: {
            backgroundColor: "#3178c6",
            link: "https://www.typescriptlang.org/",
            text: "Typescript"
        },
        Java: {
            backgroundColor: "rgb(146, 28, 18)",
            link: "https://www.java.com/en/",
            text: "Java"
        },
        Koa: {
            backgroundColor: "#010101",
            link: "https://koajs.com/",
            text: "koa.js"
        },
        Postgres: {
            backgroundColor: "#336791",
            link: "https://www.postgresql.org/",
            text: "PostgreSQL"
        },
        Redis: {
            backgroundColor: "#a51f17",
            link: "https://redis.io/",
            text: "redis"
        },
        Next: {
            backgroundColor: "#000",
            link: "https://nextjs.org/",
            text: "Next.js"
        }
    }

    if (Object.keys(types).includes(type)) {
        typeData = types[type]
    } else {
        typeData = {backgroundColor: "Gray", link: "", text: "Null"}
    }

    return typeData
}