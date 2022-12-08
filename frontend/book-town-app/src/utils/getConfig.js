const getConfig=()=>({
    headers: {
        Authorization: `JWT ${localStorage.getItem('token').token}`
    }
})

export default getConfig