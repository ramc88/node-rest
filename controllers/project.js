const Project = require('../models/projects');
const cronRegex = "^((((\d+,)+\d+|(\d+(\/|-|#)\d+)|\d+L?|\*(\/\d+)?|L(-\d+)?|\?|[A-Z]{3}(-[A-Z]{3})?) ?){5,7})$|(@(annually|yearly|monthly|weekly|daily|hourly|reboot))|(@every (\d+(ns|us|µs|ms|s|m|h))+)"


const create = async (body) => {

    try {
        if (!body.name) return { error: 'field name missing' };
        if (!body.type) return { error: 'field type missing' };
        if (!body.status) return { error: 'field status missing' };
        if (!body.description) return { error: 'field description missing' };
        if (!body.cron) return { error: 'field cron missing' };


        const newPr = new Project(body)
        const result = await newPr.save()
        return result;
    } catch (e) {
        console.log('Error creating Project: ', e);
        return ({ error: e });
    }
}

const getAll = async () => {
    try {
        return await Project.find({})
    } catch (e) {
        console.log('Error getting Projects: ', e);
        return ({ error: e });
    }
}

const getById = async (id) => {
    try {
        return await Project.findById(id);
    } catch (e) {
        console.log('Error getting Projects: ', e);
        return ({ error: e });
    }
}

const getByW = async (w) => {
    try {
        return await Project.findOne(w)
    } catch (e) {
        console.log('Error getting Projects: ', e);
        return ({ error: e });
    }
}

const getAllByW = async (w) => {
    try {
        console.log('getAllByW', w)
        return await Project.find(w)
    } catch (e) {
        console.log('Error getting Projects: ', e);
        return ({ error: e });
    }
}

const update = async (id, body) => {
    try {
        return await Project.findOneAndUpdate(id, body, { new: true });
    } catch (e) {
        console.log(e);
        return { error: e };
    }
}

const deleteById = async (id) => {
    try {
        return await Project.findByIdAndRemove(id);
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