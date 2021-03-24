const Execution = require('../models/executions');


const create = async (body) => {

    try {
        const newPr = new Execution(body)
        const result = await newPr.save();
        return result;
    } catch (e) {
        console.log('Error creating Execution: ', e);
        return ({ error: e });
    }
}

const getAll = async () => {
    try {
        return await Execution.find({})
    } catch (e) {
        console.log('Error getting Executions: ', e);
        return ({ error: e });
    }
}

const getById = async (id) => {
    try {
        return await Execution.findById(id);
    } catch (e) {
        console.log('Error getting Executions: ', e);
        return ({ error: e });
    }
}

const getByW = async (w) => {
    try {
        return await Execution.findOne(w)
    } catch (e) {
        console.log('Error getting Executions: ', e);
        return ({ error: e });
    }
}

const getAllByW = async (w) => {
    try {
        console.log('getAllByW', w)
        return await Execution.find(w)
    } catch (e) {
        console.log('Error getting Executions: ', e);
        return ({ error: e });
    }
}

const update = async (id, body) => {
    try {
        return await Execution.findOneAndUpdate(id, body, { new: true });
    } catch (e) {
        console.log(e);
        return { error: e };
    }
}

const deleteById = async (id) => {
    try {
        return await Execution.findByIdAndRemove(id);
    } catch (e) {
        console.log(e);
        return { error: e };
    }

}

module.exports = {
    create,
    getAll,
    getById,
    getByW,
    getAllByW,
    update,
    deleteById
};