const axios = require('axios');

const tempObjs = [];

const create = async (body) => {
    try {
        if (!validateCoffee(body)) throw new Error('Invalid input');
        tempObjs.push(body)
        return body;
    } catch (e) {
        console.log('Error creating: ', e);
        throw new Error(e);
    }
}

const getAll = async () => {
    try {
        const { data: coffees } = await axios.get(`${global.config.flaskServ}/coffees`)
        return coffees.data.concat(tempObjs);
    } catch (e) {
        console.log('Error getting: ', e);
        return ({ error: e });
    }
}

const getFromSource = async () => {
    try {
        const { data: coffees } = await axios.get(`${global.config.flaskServ}/coffees`)
        return coffees;
    } catch (e) {
        console.log('Error getting: ', e);
        return ({ error: e });
    }
}

const getByTitle = async (title) => {
    try {
        const { data: coffees } = await axios.get(`${global.config.flaskServ}/coffees`);
        return await coffees.data.filter(obj => obj.title === title);
    } catch (e) {
        console.log('Error getting Executions: ', e);
        return ({ error: e });
    }
}

const validateCoffee = function({title, description, ingredients}) {
    if (!title || !description){
        return false;
    }
    if (!Array.isArray(ingredients)){
        return false;
    }
    return true;
}

module.exports = {
    create,
    getAll,
    getFromSource,
    getByTitle,
};