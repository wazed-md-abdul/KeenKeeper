
 const getAllFromLocalDB = () => {
    const inerection = JSON.parse(localStorage.getItem('inerection'));
    if(inerection) return inerection;
    else return [];
}

const addToLocalDB = (interection) => {
    const allInterection = getAllFromLocalDB(interection);
    allInterection.push(interection);
    localStorage.setItem('inerection', JSON.stringify(allInterection));
}

export {getAllFromLocalDB, addToLocalDB};