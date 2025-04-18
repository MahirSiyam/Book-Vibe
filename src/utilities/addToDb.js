const getStoreBook = () => {

    const storeBookSTR = localStorage.getItem("readList");

    if(storeBookSTR)
    {
        const storeBookData = JSON.parse(storeBookSTR);
        return storeBookData;
    }
    else
    {
        return[];
    }

}

const addToStoredDb = (id) => {

    const storeBookData = getStoreBook();

    if(storeBookData.includes(id))
    {
        alert("bhai ai id already ase");
    }
    else
    {
        storeBookData.push(id);

        const data = JSON.stringify(storeBookData);

        localStorage.setItem("readList" , data);
    }

}

export {addToStoredDb , getStoreBook};



// const getStoreBook = () => {
//     const storeBookSTR = localStorage.getItem("readList");
    
//     if(storeBookSTR)
//     {
//         const storeBookData = JSON.parse(storeBookSTR);
//         return storeBookData;
//     }
//     else
//     {
//         return [];
//     }
// }

// const addToStoreDb = (id) => {
//     const storeBookData = getStoreBook();

//     if(storeBookData.includes(id))
//     {
//         alert("vai ai id already ase");
//     }
//     else
//     {
//         storeBookData.push(id);

//         const data = JSON.stringify(storeBookData);

//         localStorage.setItem("readList" , data);
//     }
// }