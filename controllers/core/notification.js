const Notification = require('../../models/notification');


const create = async (body) => {

    try {
        const newPr = new Notification(body)
        const result = await newPr.save();
        return result;
    } catch (e) {
        console.log('Error creating Execution: ', e);
        return ({ error: e });
    }
}

const getAll = async () => {
    try {
        return await Notification.find({})
    } catch (e) {
        console.log('Error getting Executions: ', e);
        return ({ error: e });
    }
}

const getById = async (id) => {
    try {
        return await Notification.findById(id);
    } catch (e) {
        console.log('Error getting Executions: ', e);
        return ({ error: e });
    }
}

const getByW = async (w) => {
    try {
        return await Notification.findOne(w)
    } catch (e) {
        console.log('Error getting Executions: ', e);
        return ({ error: e });
    }
}

const getAllByW = async (w) => {
    try {
        console.log('getAllByW', w)
        return await Notification.find(w)
    } catch (e) {
        console.log('Error getting Executions: ', e);
        return ({ error: e });
    }
}

const update = async (id, body) => {
    try {
        return await Notification.findOneAndUpdate(id, body, { new: true });
    } catch (e) {
        console.log(e);
        return { error: e };
    }
}

const deleteById = async (id) => {
    try {
        return await Notification.findByIdAndRemove(id);
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