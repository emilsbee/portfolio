export const getTypeData = (type) => {
    let typeData;

    const types = {
        React: {
            backgroundColor: "rgb(113, 187, 214)",
            link: "https://reactjs.org/" 
        },
        Firebase: {
            backgroundColor: "rgb(243, 169, 63)",
            link: "https://firebase.google.com/"
        },
        EasyPeasy: {
            backgroundColor: "rgb(143, 193, 97)",
            link: "https://easy-peasy.vercel.app/"
        }, 
        Sass: {
            backgroundColor: "rgb(177, 74, 126)",
            link: "https://sass-lang.com/"
        }
    }

    if (Object.keys(types).includes(type)) {
        typeData = types[type]
    } else {
        typeData = {backgroundColor: "Gray", link: ""}
    }

    return typeData
}